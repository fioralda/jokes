import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import JokesProvider from "./context/JokesProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <JokesProvider>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </JokesProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
