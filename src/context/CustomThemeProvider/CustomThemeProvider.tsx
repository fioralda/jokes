import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

export type Theme = "light" | "dark";

export type State = {
  theme: Theme;
  toggleTheme: (theme: Theme) => void;
};

export const Context = createContext<State | undefined>(undefined);
Context.displayName = "CustomThemeContext";

type Props = {
  children?: ReactNode;
};

const CustomThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = (theme: Theme) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme") as Theme;
    if (theme) toggleTheme(theme);
  }, []);

  return (
    <Context.Provider value={{ theme, toggleTheme }}>
      {children}
    </Context.Provider>
  );
};

export const useCustomThemeContext = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error(
      "useCustomThemeContext must be used within an CustomThemeProvider"
    );
  }

  return context;
};

export default CustomThemeProvider;
