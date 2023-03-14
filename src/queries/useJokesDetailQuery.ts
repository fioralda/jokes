import { useQuery } from "@tanstack/react-query";
import { getJokeDetails } from "../api/JokesApi";

export const useJokesDetailQuery = (id: string) =>
  useQuery(["joke", id], () => getJokeDetails(id));
