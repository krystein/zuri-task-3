import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'inter', San-serif;
}
html, body{
    overflow-x: hidden;
    scroll-padding: 60px;
    scroll-behavior: smooth;
}


`;

export default GlobalStyle;
