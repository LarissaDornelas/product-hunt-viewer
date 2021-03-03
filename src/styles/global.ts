import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
${normalize}
*{
    @import url(../assets/fonts/Pragmatica-ExtraLight.ttf);
    font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
}

body{
    display: flex;
    justify-content: center;
    align-items:center;
    height: 100vh;
    background-color: ${theme.colors.primary}
}
`;
