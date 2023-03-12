import { useAuthContext } from "../../context/AuthProvider";
import { StyledButton, Wrapper } from "./styled";

const Login = () => {
  const { login } = useAuthContext();

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
