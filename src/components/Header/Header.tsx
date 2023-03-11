import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthProvider/AuthProvider";
import { useCustomThemeContext } from "../../context/CustomThemeProvider/CustomThemeProvider";

const Header = () => {
  const { token, logout } = useAuthContext();
  const { theme, toggleTheme } = useCustomThemeContext();

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      {token && location.pathname === "/" ? (
        <button onClick={() => navigate("/new")}>New Joke</button>
      ) : null}

      {token && location.pathname !== "/" ? (
        <button onClick={() => navigate(-1)}>Back</button>
      ) : null}

      <button onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}>
        {theme}
      </button>

      {token ? (
        <button
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      ) : null}
    </div>
  );
};

export default Header;
