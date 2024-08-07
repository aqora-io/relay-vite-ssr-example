import React from "react";
import ReactDOM from "react-dom/client";
import { RecordSource } from "relay-runtime";
import { createEnvironment } from "./environment";
import { RelayEnvironmentProvider } from "react-relay";
import { ErrorBoundary } from "react-error-boundary";
import BrowserRouter from "./components/BrowserRouter";

interface InjectedWindow extends Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  __RECORD_SOURCE: any;
}

const recordSource = new RecordSource(
  (window as unknown as InjectedWindow).__RECORD_SOURCE,
);
const environment = createEnvironment(
  "http://localhost:8080/graphql",
  recordSource,
);

ReactDOM.hydrateRoot(
  document.getElementById("root")!,
  <React.StrictMode>
    <ErrorBoundary fallback={<div>Something went wrong :(</div>}>
      <RelayEnvironmentProvider environment={environment}>
        <BrowserRouter />
      </RelayEnvironmentProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
