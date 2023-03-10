import axios from "axios";

export type Joke = {
  id: number;
  Body: string;
  Title: string;
  Views: string;
  Author: string;
  CreatedAt: number;
};

export type CreateJoke = {
  Body: string;
  Title: string;
  Views: string;
  Author: string;
  CreatedAt: number;
};

export const getJokes = async (page: number, limit: number) => {
  const res = await axios.get<Joke[]>(
    `https://retoolapi.dev/zu9TVE/jokes?_page=${page}&_limit=${limit}`
  );
  return res.data;
};

export const createJoke = async (joke: CreateJoke) => {
  const res = await axios.post<Joke>("https://retoolapi.dev/zu9TVE/jokes", {
    ...joke,
  });
  return res.data;
};
