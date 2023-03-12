import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

export const StyledButton = styled.button`
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  border: none;
  color: white;
  background-color: ${(props) => props.theme.colors.purple};
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;
