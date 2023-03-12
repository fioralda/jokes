import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 4rem;
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
