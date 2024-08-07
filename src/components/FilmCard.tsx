import { graphql, useFragment } from "react-relay";
import { FilmCardFragment$key } from "./__generated__/FilmCardFragment.graphql";
import { Card } from "./Cards";

const FilmCardFragment = graphql`
  fragment FilmCardFragment on Film {
    id
    title
    episodeID
    director
    releaseDate
    producers
  }
`;

interface Props {
  film: FilmCardFragment$key;
}

export const FilmCard = ({ film: filmFragment }: Props) => {
  const { id, title, episodeID, director, releaseDate, producers } =
    useFragment(FilmCardFragment, filmFragment);
  return (
    <Card
      linkTo={`/film/${id}/people`}
      title={title}
      data={{
        "Episode ID": episodeID,
        Director: director,
        "Release Date": releaseDate,
        Producers: producers?.join(", "),
      }}
    />
  );
};
