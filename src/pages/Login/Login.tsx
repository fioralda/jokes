import { useAuthContext } from "../../context/AuthProvider";
import { StyledButton, Wrapper } from "./styled";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { token, login } = useAuthContext();

  if (token) {
    return <Navigate replace to="/" />;
  }

  return (
    <Wrapper>
      <div>
        <h1>Please Login to access Jokes.</h1>
      </div>
      <div>
        <StyledButton
          onClick={() => {
            login();
          }}
        >
          Login
        </StyledButton>
      </div>
    </Wrapper>
  );
};

export default Login;
