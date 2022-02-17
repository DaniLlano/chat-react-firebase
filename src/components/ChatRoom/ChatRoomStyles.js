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
export const Msg = styled.div`
display: flex;
align-items: center;
padding: 20px 10px 0 20px;
margin: 20px;
border-radius: 15px;
box-shadow: 0 0 10px rgb(164, 164, 164);
background-color: ${props => props.userClass ? "#0b93f6" : "#e5e5ea"};
`