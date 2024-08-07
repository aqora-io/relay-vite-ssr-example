import { graphql, usePaginationFragment } from "react-relay";
import { FilmPlanetsFragment$key } from "./__generated__/FilmPlanetsFragment.graphql";
import { Cards } from "./Cards";
import { PlanetCard } from "./PlanetCard";
import { LoadMore } from "./LoadMore";

const FilmPlanetsFragment = graphql`
  fragment FilmPlanetsFragment on Film
  @refetchable(queryName: "FilmPlanetsFragmentQuery")
  @argumentDefinitions(
    first: { type: "Int", defaultValue: 10 }
    after: { type: "String" }
  ) {
    planetConnection(first: $first, after: $after)
      @connection(key: "FilmPlanetsFragment_planetConnection") {
      edges {
        node {
          id
          ...PlanetCardFragment
        }
      }
    }
  }
`;

interface Props {
  film: FilmPlanetsFragment$key;
}

export const FilmPlanets = ({ film: filmFragment }: Props) => {
  const {
    data: { planetConnection },
    loadNext,
    hasNext,
    isLoadingNext,
  } = usePaginationFragment(FilmPlanetsFragment, filmFragment);
  return (
    <>
      <Cards>
        {planetConnection?.edges?.map(
          (edge) =>
            edge?.node && <PlanetCard key={edge.node.id} planet={edge.node} />,
        )}
      </Cards>
      <LoadMore
        loadMore={loadNext}
        hasMore={hasNext}
        isLoading={isLoadingNext}
      />
    </>
  );
};
