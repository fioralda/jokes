import axios from "axios";

export type Joke = {
  id: number;
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

export const createJoke = async (joke: Omit<Joke, "id">) => {
  const res = await axios.post<Joke>("https://retoolapi.dev/zu9TVE/jokes", {
    ...joke,
  });
  return res.data;
};

export const getJokeDetails = async (id: string) => {
  const res = await axios.get<Joke>(`https://retoolapi.dev/zu9TVE/jokes/${id}`);
  return res.data;
};

export const updateJokeDetails = async (id: string, joke: Omit<Joke, "id">) => {
  const res = await axios.put<Joke>(
    `https://retoolapi.dev/zu9TVE/jokes/${id}`,
    {
      ...joke,
    }
  );
  return res.data;
};

export const deleteJoke = async (id: string) => {
  const res = await axios.delete(`https://retoolapi.dev/zu9TVE/jokes/${id}`);
  return res.data;
};
