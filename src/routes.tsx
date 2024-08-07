import { Environment } from "react-relay";
import { IndexRouteObject, NonIndexRouteObject } from "react-router-dom";
import { LoaderFn } from "./loaders/utils";

interface LoaderIndexRouteObject extends Omit<IndexRouteObject, "loader"> {
  loader?: LoaderFn;
}

interface LoaderNonIndexRouteObject
  extends Omit<NonIndexRouteObject, "loader" | "children"> {
  loader?: LoaderFn;
  children?: LoaderRouteObject[];
}

type LoaderRouteObject = LoaderIndexRouteObject | LoaderNonIndexRouteObject;

import { Scaffold } from "./components/Scaffold";
import { FilmsPage } from "./components/FilmsPage";
import { loadFilmsPageQuery } from "./loaders/FilmsPage";
import { FilmScaffold } from "./components/FilmScaffold";
import { loadFilmScaffoldQuery } from "./loaders/FilmScaffold";
import { FilmPeoplePage } from "./components/FilmPeoplePage";
import { loadFilmPeoplePageQuery } from "./loaders/FilmPeoplePage";
import { FilmPlanetsPage } from "./components/FilmPlanetsPage";
import { loadFilmPlanetsPageQuery } from "./loaders/FilmPlanetsPage";

export const routes = (environment: Environment): LoaderRouteObject[] => {
  return [
    {
      path: "/",
      element: <Scaffold />,
      children: [
        {
          index: true,
          element: <FilmsPage />,
          loader: loadFilmsPageQuery(environment),
        },
        {
          path: "film/:id",
          element: <FilmScaffold />,
          loader: loadFilmScaffoldQuery(environment),
          children: [
            {
              path: "people",
              element: <FilmPeoplePage />,
              loader: loadFilmPeoplePageQuery(environment),
            },
            {
              path: "planets",
              element: <FilmPlanetsPage />,
              loader: loadFilmPlanetsPageQuery(environment),
            },
          ],
        },
      ],
    },
  ];
};
