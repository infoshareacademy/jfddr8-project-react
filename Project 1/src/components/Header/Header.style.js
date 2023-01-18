import styled from "styled-components";

export const HeaderContent = styled.div`
display:flex;
justify-content: space-evenly;
align-items: center;
height:15vh;
font-size: 20px;
border: 1px solid black;
color: ${(props) => props.theme.title};
background-color: ${props => props.theme.body};
`
