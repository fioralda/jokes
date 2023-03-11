import { useAuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { login } = useAuthContext();

  return (
    <div>
      Please Login
      <button
        onClick={() => {
          login();
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
