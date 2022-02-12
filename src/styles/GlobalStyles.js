import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    background-color: #282c34;
}

button {
    background-color: #282c34;
    border: none;
    color: #fff;
    padding: 15px 32px;
    cursor: pointer;
    font-size: 1.25rem;
}

button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
`
