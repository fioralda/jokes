import React, { ReactNode, createContext, useContext, useState } from "react";

export type State = {
  limit: number;
  page: number;
  setLimit: (value: number) => void;
  setPage: (value: number) => void;
};

export const Context = createContext<State | undefined>(undefined);
Context.displayName = "JokesContext";

type Props = {
  children?: ReactNode;
};

const JokesProvider: React.FC<Props> = ({ children }) => {
  const [limit, setLimit] = useState<number>(5);
  const [page, setPage] = useState<number>(1);

  return (
    <Context.Provider value={{ limit, setLimit, page, setPage }}>
      {children}
    </Context.Provider>
  );
};

export const useJokesContext = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useJokesContext must be used within an JokesProvider");
  }

  return context;
};

export default JokesProvider;
