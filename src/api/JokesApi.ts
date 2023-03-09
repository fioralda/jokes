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
