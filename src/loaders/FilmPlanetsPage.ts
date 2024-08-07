import { graphql, Environment } from "react-relay";
import { LoaderArgs, preload, usePreloaded } from "./utils";
import { FilmPlanetsPageQuery as FilmPlanetsPageQueryType } from "./__generated__/FilmPlanetsPageQuery.graphql";

const FilmPlanetsPageQuery = graphql`
  query FilmPlanetsPageQuery($id: ID!) {
    film(id: $id) {
      ...FilmPlanetsFragment
    }
  }
`;

export const loadFilmPlanetsPageQuery = (environment: Environment) => {
  return ({ params: { id } }: LoaderArgs) => {
    if (!id) {
      throw new Response("Not Found", { status: 404 });
    }
    return preload<FilmPlanetsPageQueryType>(
      environment,
      FilmPlanetsPageQuery,
      {
        id,
      },
    );
  };
};

export const useFilmPlanetsPageQuery = () =>
  usePreloaded<FilmPlanetsPageQueryType>();
