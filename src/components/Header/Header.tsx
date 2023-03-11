import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthProvider/AuthProvider";

const Header = () => {
  const { token, logout } = useAuthContext();

  const navigate = useNavigate();

  return (
    <div>
      {token ? (
        <button onClick={() => navigate("/new")}>New Joke</button>
      ) : null}
      <button>Mode</button>
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
