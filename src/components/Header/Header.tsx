import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/new")}>New Joke</button>
      <button>Mode</button>
      <button>Logout</button>
    </div>
  );
};

export default Header;
