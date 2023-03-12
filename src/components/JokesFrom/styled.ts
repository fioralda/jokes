import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 25rem;
`;

export const StyledInput = styled.input`
  padding: 1rem;
  border-radius: 0.4rem;
  border: none;
  background-color: ${(props) => props.theme.secondary};
  ::placeholder {
    color: ${(props) => props.theme.text};
  }
`;

export const StyledTextArea = styled.textarea`
  height: 10rem;
  border-radius: 0.4rem;
`;

export const StyledButton = styled.button`
  padding: 1rem;
  border-radius: 0.4rem;
  border: none;
  font-size: 1rem;
  background-color: ${(props) => props.theme.primary};
  color: white;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.primary};
    opacity: 0.8;
  }
`;

export const FormError = styled.span`
  color: red;
  font-size: 0.8rem;
`;
