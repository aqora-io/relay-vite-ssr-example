import { RouteObject } from "react-router-dom";
import {
  createStaticRouter,
  StaticHandlerContext,
  StaticRouterProvider,
} from "react-router-dom/server";

interface Props {
  routes: RouteObject[];
  context: StaticHandlerContext;
}

export const ServerRouter = ({ routes, context }: Props) => {
  const router = createStaticRouter(routes, context);
  return <StaticRouterProvider router={router} context={context} />;
};
