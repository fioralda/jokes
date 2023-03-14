import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import JokesProvider from "./context/JokesProvider";
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter } from "react-router-dom";
import CustomThemeProvider from "./context/CustomThemeProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <CustomThemeProvider>
          <AuthProvider>
            <JokesProvider>
              <App />
              <ReactQueryDevtools initialIsOpen={false} />
            </JokesProvider>
          </AuthProvider>
        </CustomThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
