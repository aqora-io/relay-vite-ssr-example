import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet as BaseOutlet } from "react-router-dom";

export const Outlet = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong :(</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <BaseOutlet />
      </Suspense>
    </ErrorBoundary>
  );
};
