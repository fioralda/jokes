import { createGlobalStyle, DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  body: "#f1f1f1",
  text: "#121620",
  primary: "#7286D3",
  secondary: "#E5E0FF",
  peach: "#FFBFA9",
};

export const darkTheme: DefaultTheme = {
  body: "#111928",
  text: "#f1f1f1",
  primary: "#37306B",
  secondary: "#827397",
  peach: "#F49D1A",
};

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto';
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  `;
