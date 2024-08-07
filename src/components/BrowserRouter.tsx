import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useRelayEnvironment } from "react-relay";
import { routes } from "../routes";
import { reload } from "../loaders/utils";

export default function BrowserRouter() {
  const relayEnvironment = useRelayEnvironment();
  const router = useMemo(() => {
    const hydrationData = window.__staticRouterHydrationData || {};
    if (hydrationData.loaderData) {
      for (const key in hydrationData.loaderData) {
        if (hydrationData.loaderData[key]) {
          hydrationData.loaderData[key] = reload(
            relayEnvironment,
            hydrationData.loaderData[key],
          );
        }
      }
    }
    return createBrowserRouter(routes(relayEnvironment), { hydrationData });
  }, [relayEnvironment]);
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}
