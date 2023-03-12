import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#f1f1f1",
  text: "#121620",
  colors: {
    yellow: "#f2d53c",
    purple: "#7d3cff",
  },
};

export const darkTheme = {
  body: "#121620",
  text: "#f1f1f1",
  colors: {
    yellow: "#f2d53c",
    purple: "#7d3cff",
  },
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  `;
