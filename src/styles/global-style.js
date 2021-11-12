import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  /* @font-face {
    font-family: "NotoSansKR";
    font-weight: normal;
    font-style: normal;
    src: url("/fonts/NotoSansKR-Regular.otf") format("opentype");
  } */

  html {
    color: #3E3E3E;
    font-family: NotoSansKR;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, button {
    outline: none; 
    border: none;
    background-color: transparent;                                                                                                                                                                        
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
