import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    font-family: 'Space Mono', monospace;
}

body {

}

.svg-images {
    // display: block;
    align-self: center;
    height: 0.8rem;
    viewBox: '0 0 11 17';
}

`;