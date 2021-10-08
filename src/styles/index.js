import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
  }
  :root{
        --white: #F2F2F2;
        --gray1: #BFBFBF;
        --gray2: #737373;
        --gray3: #404040;
        --black: #0D0D0D;
  }
  body {
    font-family: 'Nunito', sans-serif;
    background-color: var(--gray1);
  }
  h1 {
    font-weight: 600;
  }
  img, button, a, span, svg 
  {
    cursor: pointer;
  }
`;

export default GlobalStyle;
