import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthProvider/AuthProvider";
import { useCustomThemeContext } from "../../context/CustomThemeProvider/CustomThemeProvider";
import {
  AuthButton,
  HeaderLeft,
  HeaderRight,
  HeaderWrapper,
  StyledArrow,
  StyledButton,
  StyledImage,
} from "./styled";
import moon from "../../images/moon.png";
import sun from "../../images/sun.png";
import arrow from "../../images/arrow.png";

const Header = () => {
  const { token, logout } = useAuthContext();
  const { theme, toggleTheme } = useCustomThemeContext();

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <HeaderLeft>
        {token && location.pathname === "/" ? (
          <StyledButton onClick={() => navigate("/new")}>
            Create Joke
          </StyledButton>
        ) : null}

        {token && location.pathname !== "/" ? (
          <StyledArrow src={arrow} onClick={() => navigate(-1)} />
        ) : null}
      </HeaderLeft>

      <HeaderRight>
        <StyledImage
          src={theme === "light" ? moon : sun}
          onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
        />

        {token ? (
          <AuthButton
            onClick={() => {
              logout();
            }}
          >
            Logout
          </AuthButton>
        ) : null}
      </HeaderRight>
    </HeaderWrapper>
  );
};

export default Header;
