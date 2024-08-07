import {
  Environment,
  FetchFunction,
  Network,
  RecordSource,
  Store,
  Observable,
} from "relay-runtime";

const createFetchFunction =
  (url: string): FetchFunction =>
  (params, variables) => {
    const response = fetch(url, {
      method: "POST",
      headers: [["Content-Type", "application/json"]],
      body: JSON.stringify({
        query: params.text,
        variables,
      }),
    });

    return Observable.from(response.then((data) => data.json()));
  };

/**
 * Creates a new Relay environment instance for managing (fetching, storing) GraphQL data.
 */
export const createEnvironment = (url: string, records: RecordSource) => {
  const network = Network.create(createFetchFunction(url));
  const store = new Store(records);
  return new Environment({ store, network });
};
