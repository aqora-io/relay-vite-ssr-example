import {
  PreloadedQuery,
  loadQuery,
  usePreloadedQuery,
  Environment,
} from "react-relay";
import { Params } from "react-router-dom";
import { OperationType, GraphQLTaggedNode } from "relay-runtime";
import { useLoaderData } from "react-router-dom";

export interface LoaderArgs {
  params: Params;
  request: Request;
}

export type LoaderFn = (args: LoaderArgs) => PreloadedData<OperationType>;

export interface PreloadedData<TQuery extends OperationType> {
  graphql: GraphQLTaggedNode;
  variables: TQuery["variables"];
  query: PreloadedQuery<TQuery>;
}

export const preload = <TQuery extends OperationType>(
  environment: Environment,
  graphql: GraphQLTaggedNode,
  variables: TQuery["variables"] = {},
): PreloadedData<TQuery> => {
  return {
    graphql,
    variables,
    query: loadQuery<TQuery>(environment, graphql, variables),
  };
};

export const reload = <TQuery extends OperationType>(
  environment: Environment,
  preloaded: PreloadedData<TQuery>,
): PreloadedData<TQuery> => {
  const { graphql, variables, ...rest } = preloaded;
  return {
    graphql,
    variables,
    ...rest,
    query: loadQuery<TQuery>(environment, graphql, variables),
  };
};

export const usePreloaded = <TQuery extends OperationType>() => {
  const { variables, query, graphql, ...rest } =
    useLoaderData() as PreloadedData<TQuery>;
  return {
    variables,
    query: usePreloadedQuery<TQuery>(graphql, query),
    ...rest,
  };
};
