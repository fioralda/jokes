import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledButton = styled.button`
  width: 25rem;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 0.4rem;
  border: none;
  font-size: 1rem;
  background-color: ${(props) => props.theme.peach};
  color: white;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.peach};
    opacity: 0.8;
  }
`;
