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
align-items: flex-start;
width: fit-content;
max-width: 350px;
margin-bottom: 12px;
line-height: 24px;
padding: 10px 20px;
border-radius: 25px;
color: ${props => props.userClass ? '#fff' : '#00000'};
align-self: ${props => props.userClass && "flex-end"};
background-color: ${props => props.userClass ? "#0b93f6" : "#e5e5ea"};
flex-direction: ${props => props.userClass && "row-reverse"};
`

export const Text = styled.p`
text-align: ${props => props.userClass ? 'end' : 'start'};
margin: auto 5px;
`

export const Img = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
margin: 5px;
`