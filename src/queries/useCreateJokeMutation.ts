import { useMutation } from "@tanstack/react-query";
import { createJoke, Joke } from "../api/JokesApi";

export const useCreateJokeMutation = () =>
  useMutation((data: Omit<Joke, "id">) => createJoke(data));
