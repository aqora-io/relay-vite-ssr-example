import { useFilmPlanetsPageQuery } from "../loaders/FilmPlanetsPage";
import { FilmPlanets } from "./FilmPlanets";

export const FilmPlanetsPage = () => {
  const {
    query: { film },
  } = useFilmPlanetsPageQuery();
  if (!film) {
    throw new Response("Not Found", { status: 404 });
  }
  return <FilmPlanets film={film} />;
};
