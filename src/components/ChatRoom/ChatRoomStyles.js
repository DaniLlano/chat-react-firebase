import styled from 'styled-components'

export const Main = styled.main`
padding: 10px;
height: 80vh;
margin: 10vh 0 10vh;
overflow-y: scroll;
display: flex;
flex-direction: column;

::-webkit-scrollbar {
    width: .25rem;
}

::-webkit-scrollbar-track {
    background: #1e1e24;
}

::-webkit-scrollbar-thumb {
    background: #6649b8;
}
`

export const Form = styled.form`
height: 10vh;
position: fixed;
bottom: 0;
background-color: #181717;
width: 100%;
max-width: 728px;
display: flex;
font-size: 1.5rem;
`

export const SendBtn = styled.button`
width: 20%;
background-color: #38388f;
`

export const InputMsg = styled.input`
line-height: 1.5;
width: 100%;
font-size: 1.5rem;
background: #3a3a3a;
color: #fff;
outline: none;
border: none;
padding: 0 10px;
`