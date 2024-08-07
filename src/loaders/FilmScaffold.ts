import { graphql, Environment } from "react-relay";
import { LoaderArgs, preload, usePreloaded } from "./utils";
import { FilmScaffoldQuery as FilmScaffoldQueryType } from "./__generated__/FilmScaffoldQuery.graphql";

const FilmScaffoldQuery = graphql`
  query FilmScaffoldQuery($id: ID!) {
    film(id: $id) {
      title
    }
  }
`;

export const loadFilmScaffoldQuery = (environment: Environment) => {
  return ({ params: { id } }: LoaderArgs) => {
    if (!id) {
      throw new Response("Not Found", { status: 404 });
    }
    return preload<FilmScaffoldQueryType>(environment, FilmScaffoldQuery, {
      id,
    });
  };
};

export const useFilmScaffoldQuery = () => usePreloaded<FilmScaffoldQueryType>();
