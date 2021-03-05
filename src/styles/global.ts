import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { theme } from "./theme";
import "../assets/fonts/Pragmatica-ExtraLight.ttf";

export const GlobalStyle = createGlobalStyle`
${normalize}

html{ 
    font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 400;
    letter-spacing: 1px;

#root{
    width: 100%;
}
}
   
body{
    display: flex;
    height: 100vh;
    width: 100%;
    background-color: ${theme.colors.primary}
}
`;
