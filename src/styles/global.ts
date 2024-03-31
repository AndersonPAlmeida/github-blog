import { createGlobalStyle } from "styled-components";
import { stylesStandard } from "./stylesStandard";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.blue};
  }

  body {
    background: ${({ theme }) => theme["base-background"]};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, textarea, button {
    ${stylesStandard.fonts.textM}
    color: ${({ theme }) => theme["base-text"]};
  }

  a {
    text-decoration: none;
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  input {
    border: 0;
    outline: 0;
  }
`