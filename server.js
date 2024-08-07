import fs from "node:fs/promises";
import express from "express";
import proxy from "express-http-proxy";
import { Transform } from "node:stream";
import logger from "pino-http";

// Constants
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 8080;
const base = process.env.BASE || "/";
const ABORT_DELAY = 10000;
const GRAPHQL_URL = new URL(
  "https://swapi-graphql.netlify.app/.netlify/functions/index",
);

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile("./dist/client/index.html", "utf-8")
  : "";

// Create http server
const app = express();

// Add logging
app.use(
  logger({
    customLogLevel: function (req, res, err) {
      if (res.statusCode >= 400 && res.statusCode < 500) {
        return "warn";
      } else if (res.statusCode >= 500 || err) {
        return "error";
      }
      return "silent";
    },
  }),
);

// Add Vite or respective production middlewares
let vite;
if (!isProduction) {
  const { createServer } = await import("vite");
  vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    base,
  });
  app.use(vite.middlewares);
} else {
  const compression = (await import("compression")).default;
  const sirv = (await import("sirv")).default;
  app.use(compression());
  app.use(base, sirv("./dist/client", { extensions: [] }));
}

const graphqlProxy = proxy(GRAPHQL_URL.origin, {
  proxyReqPathResolver: function () {
    return GRAPHQL_URL.pathname;
  },
});
app.use("/graphql", graphqlProxy);

// Serve HTML
app.use("*", async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, "");

    let template;
    let serverModule;
    if (!isProduction) {
      // Always read fresh template in development
      template = await fs.readFile("./index.html", "utf-8");
      template = await vite.transformIndexHtml(url, template);
      serverModule = await vite.ssrLoadModule("/src/server.tsx");
    } else {
      template = templateHtml;
      serverModule = await import("./dist/server/server.js");
    }

    const { render, createContext } = serverModule;
    const [htmlStart, restHtml] = template.split(`<!--app-head-->`);
    const [bodyStart, htmlEnd] = restHtml.split(`<!--app-html-->`);

    const context = await createContext(GRAPHQL_URL, req, res);

    let didError = false;

    const { pipe, abort } = render(context, {
      onShellError() {
        res.status(500);
        res.set({ "Content-Type": "text/html" });
        res.send("<h1>Something went wrong</h1>");
      },
      onAllReady() {
        res.status(didError ? 500 : 200);
        res.set({ "Content-Type": "text/html" });

        const transformStream = new Transform({
          transform(chunk, encoding, callback) {
            res.write(chunk, encoding);
            callback();
          },
        });

        res.write(htmlStart);

        const { helmet } = context.helmetContext;
        if (helmet) {
          res.write(helmet.title.toString());
          res.write(helmet.priority.toString());
          res.write(helmet.meta.toString());
          res.write(helmet.link.toString());
          res.write(helmet.script.toString());
        }

        const { recordSource } = context;
        res.write(
          `<script>window.__RECORD_SOURCE = ${JSON.stringify(recordSource.toJSON())}</script>`,
        );

        res.write(bodyStart);

        transformStream.on("finish", () => {
          res.end(htmlEnd);
        });

        pipe(transformStream);
      },
      onError(error) {
        didError = true;
        console.error(error);
      },
    });

    setTimeout(() => {
      abort();
    }, ABORT_DELAY);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.error(e.stack);
    res.status(500).end(e.stack);
  }
});

// Start http server
app.listen(port, () => {
  console.log(`🚀 Server started at http://localhost:${port}`);
  console.log(`🔗 GraphQL host: ${GRAPHQL_URL}`);
});
