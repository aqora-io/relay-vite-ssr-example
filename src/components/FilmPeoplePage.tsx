import { useFilmPeoplePageQuery } from "../loaders/FilmPeoplePage";
import { FilmPeople } from "./FilmPeople";

export const FilmPeoplePage = () => {
  const {
    query: { film },
  } = useFilmPeoplePageQuery();
  if (!film) {
    throw new Response("Not Found", { status: 404 });
  }
  return <FilmPeople film={film} />;
};
