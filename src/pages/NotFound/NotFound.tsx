import { StyledButton, Title, Wrapper } from "./styled";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title>404</Title>
      <p>Route not found</p>
      <StyledButton onClick={() => navigate("/")}>Home</StyledButton>
    </Wrapper>
  );
};

export default NotFound;
