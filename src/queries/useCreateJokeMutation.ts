import { useMutation } from "@tanstack/react-query";
import { createJoke, CreateJoke } from "../api/JokesApi";

export const useCreateJokeMutation = () =>
  useMutation((data: CreateJoke) => createJoke(data));
