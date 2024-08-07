import { graphql, usePaginationFragment } from "react-relay";
import { FilmsFragment$key } from "./__generated__/FilmsFragment.graphql";
import { FilmCard } from "./FilmCard";
import { Cards } from "./Cards";
import { LoadMore } from "./LoadMore";

const FilmsFragment = graphql`
  fragment FilmsFragment on Root
  @refetchable(queryName: "FilmsFragmentQuery")
  @argumentDefinitions(
    first: { type: "Int", defaultValue: 10 }
    after: { type: "String" }
  ) {
    allFilms(first: $first, after: $after)
      @connection(key: "FilmsFragment_allFilms") {
      edges {
        node {
          id
          ...FilmCardFragment
        }
      }
    }
  }
`;

interface Props {
  query: FilmsFragment$key;
}

export const Films = ({ query: queryFragment }: Props) => {
  const {
    data: { allFilms },
    loadNext,
    hasNext,
    isLoadingNext,
  } = usePaginationFragment(FilmsFragment, queryFragment);
  return (
    <>
      <h1>All Films</h1>
      <Cards>
        {allFilms?.edges?.map(
          (edge) =>
            edge?.node && <FilmCard key={edge.node.id} film={edge.node} />,
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
