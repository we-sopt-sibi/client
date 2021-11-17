import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: "NotoSansKR-Regular";
    src: url("/fonts/NotoSansKR-Regular.otf") format("opentype");
  }

  @font-face {
    font-family: "NotoSansKR";
    src: url("/fonts/NotoSansKR-Light.otf") format("opentype");
  }

  @font-face {
    font-family: "NanumMyeongjo";
    src: url("/fonts/NanumMyeongjo-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "Georgia";
    src: url("/fonts/georgia italic.ttf") format("truetype");
  }

  html {
    color: #333333;
    font-family: NotoSansKR;
    font-size: 10px;
    line-height: 1.8;
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
    border: 0.1rem solid ${({ theme }) => theme.colors.gray600};
    display: flex;
    align-items: center;
  }
`;

export default GlobalStyle;
