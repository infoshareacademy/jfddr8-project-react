import styled from "styled-components";

export const StyledSideBar = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 30%;
height: 100%;
border: 1px solid black;
color: ${(props) => props.theme.title};
background-color: ${props => props.theme.body};
`
