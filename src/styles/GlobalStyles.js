import styled, { createGlobalStyle } from 'styled-components';

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

.App {
    text-align: center;
    max-width: 728px;
    margin: 0 auto;
}
`

export const Header = styled.header`
background-color: #181717;
height: 10vh;
min-height: 50px;
color: #fff;
position: fixed;
width: 100%;
max-width: 728px;
top: 0;
display: flex;
align-items: center;
justify-content: space-between;
z-index: 99;
padding: 10px;
box-sizing: border-box;
`

export const Section = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
min-height: 100vh;
background-color: #282535;
`
