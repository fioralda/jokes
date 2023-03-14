import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const StyledButton = styled.button`
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  border: none;
  color: white;
  background-color: ${(props) => props.theme.primary};
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.primary};
    opacity: 0.8;
  }
`;

export const AuthButton = styled(StyledButton)`
  border: 1px solid ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
  background-color: transparent;
  :hover {
    background-color: ${(props) => props.theme.primary};
    color: white;
  }
`;

export const StyledImage = styled.img`
  width: 33px;
  height: 32px;
  cursor: pointer;
`;

export const StyledArrow = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
