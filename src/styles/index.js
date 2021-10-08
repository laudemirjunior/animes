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
        --blue1: #BEC7C7;
        --blue2: #A7C6D9;
        --blue3: #5A7E8C;
        --blue4: #80ADBF;
        --blue5: #193C40;
  }
  body {
    font-family: 'Nunito', sans-serif;
    background-color: var(--blue1);
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
