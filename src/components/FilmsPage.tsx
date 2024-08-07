import { useFilmsPageQuery } from "../loaders/FilmsPage";
import { Films } from "./Films";

export const FilmsPage = () => {
  const { query } = useFilmsPageQuery();
  return <Films query={query} />;
};
