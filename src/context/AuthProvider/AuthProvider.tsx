import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";

export type State = {
  token: string | null;
  login: () => void;
  logout: () => void;
};

export const Context = createContext<State | undefined>(undefined);
Context.displayName = "AuthContext";

type Props = {
  children?: ReactNode;
};

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("token", "token");
    setToken("token");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };

  useEffect(() => {
    const tokenExists = localStorage.getItem("token");
    if (tokenExists) {
      login();
    }
  }, []);

  return (
    <Context.Provider value={{ token, login, logout }}>
      {children}
    </Context.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }

  return context;
};

export default AuthProvider;
