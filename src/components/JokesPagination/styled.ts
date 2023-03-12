import styled from "styled-components";

export const JokesPaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-top: 2rem;
`;

export const StyledButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.2rem;
  border: none;
  background-color: ${(props) => props.theme.primary};
  color: white;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.primary};
    opacity: 0.8;
  }
`;

export const StyledSelect = styled.select`
  padding: 0.4rem;
  border-radius: 0.2rem;
  background-color: ${(props) => props.theme.secondary};
`;
