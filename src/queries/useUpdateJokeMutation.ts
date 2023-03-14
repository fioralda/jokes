import { useMutation } from "@tanstack/react-query";
import { Joke, updateJokeDetails } from "../api/JokesApi";

export const useUpdateJokeMutation = (id: string) =>
  useMutation((data: Omit<Joke, "id">) => updateJokeDetails(id, data));
