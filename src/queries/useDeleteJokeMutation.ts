import { useMutation } from "@tanstack/react-query";
import { deleteJoke } from "../api/JokesApi";

export const useDeleteJokeMutation = () =>
  useMutation((id: string) => deleteJoke(id));
