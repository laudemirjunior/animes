import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  :root{
        --purple: #6D28D9;
        --gray: #AEBAD8;
        --blue: #131B40;
  }
  body {
    font-family: 'Nunito', sans-serif;
    background-color: black;
    color: white;
  }
  h1 {
    font-weight: 600;
    text-align: center;
    margin: 20px 0;
  }
`;

export default GlobalStyle;
