import { useFilmScaffoldQuery } from "../loaders/FilmScaffold";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const FilmScaffold = () => {
  const {
    query: { film },
    variables: { id },
  } = useFilmScaffoldQuery();
  if (!film) {
    throw new Response("Not Found", { status: 404 });
  }
  return (
    <>
      <Link to="/">Home</Link>
      <h1>{film.title}</h1>
      <div className="nav">
        <Link to={`/film/${id}/people`}>People</Link>
        <Link to={`/film/${id}/planets`}>Planets</Link>
      </div>
      <Outlet />
    </>
  );
};
