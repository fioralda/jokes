import { useQuery } from "react-query";
import { getJokes } from "../api/JokesApi";

export const useJokesQuery = (page: number, limit: number) =>
  useQuery(["jokes", page, limit], () => getJokes(page, limit));
