import { graphql, Environment } from "react-relay";
import { preload, usePreloaded } from "./utils";
import { FilmsPageQuery as FilmsPageQueryType } from "./__generated__/FilmsPageQuery.graphql";

const FilmsPageQuery = graphql`
  query FilmsPageQuery {
    ...FilmsFragment
  }
`;

export const loadFilmsPageQuery = (environment: Environment) => {
  return () => preload<FilmsPageQueryType>(environment, FilmsPageQuery);
};

export const useFilmsPageQuery = () => usePreloaded<FilmsPageQueryType>();
