import { graphql, usePaginationFragment } from "react-relay";
import { Helmet } from "react-helmet-async";
import { FilmPeopleFragment$key } from "./__generated__/FilmPeopleFragment.graphql";
import { Cards } from "./Cards";
import { PersonCard } from "./PersonCard";
import { LoadMore } from "./LoadMore";

const FilmPeopleFragment = graphql`
  fragment FilmPeopleFragment on Film
  @refetchable(queryName: "FilmPeopleFragmentQuery")
  @argumentDefinitions(
    first: { type: "Int", defaultValue: 10 }
    after: { type: "String" }
  ) {
    title
    characterConnection(first: $first, after: $after)
      @connection(key: "FilmPeopleFragment_characterConnection") {
      edges {
        node {
          id
          ...PersonCardFragment
        }
      }
    }
  }
`;

interface Props {
  film: FilmPeopleFragment$key;
}

export const FilmPeople = ({ film: filmFragment }: Props) => {
  const {
    data: { title, characterConnection },
    loadNext,
    hasNext,
    isLoadingNext,
  } = usePaginationFragment(FilmPeopleFragment, filmFragment);
  return (
    <>
      <Helmet title={`${title} | People`} />
      <Cards>
        {characterConnection?.edges?.map(
          (edge) =>
            edge?.node && <PersonCard key={edge.node.id} person={edge.node} />,
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
