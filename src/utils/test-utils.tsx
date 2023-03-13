import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { cleanup, render } from "@testing-library/react";
import { ReactElement } from "react";
import { afterEach } from "vitest";
import AuthProvider from "../context/AuthProvider";
import CustomThemeProvider from "../context/CustomThemeProvider";
import JokesProvider from "../context/JokesProvider";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

afterEach(() => {
  cleanup();
});

const customRender = (
  ui: React.ReactElement,
  { user = userEvent.setup({ delay: null }), ...renderOptions } = {}
) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // Retrying failed queries is disabled in order to reduce the execution time of the tests and
        // avoid increasing tests' timeouts.
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      // Avoid console errors on HTTP errors
      error: () => {},
    },
  });

  const Wrapper = ({ children }: { children: ReactElement }) => {
    return (
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <CustomThemeProvider>
            <AuthProvider>
              <JokesProvider>{children}</JokesProvider>
            </AuthProvider>
          </CustomThemeProvider>
        </QueryClientProvider>
      </MemoryRouter>
    );
  };

  return {
    ...render(ui, {
      wrapper: ({ children }) => <Wrapper>{children}</Wrapper>,
      ...renderOptions,
    }),
    user,
  };
};

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };
