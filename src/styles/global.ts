import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
${normalize}
*{
    @import url(../assets/fonts/Roboto-Regular.ttf);
    font-family: 'Roboto', sans-serif;
}

body{
    display: flex;
    justify-content: center;
    align-items:center;
    height: 100vh;
    background-color: ${theme.colors.primary}
}
`;
