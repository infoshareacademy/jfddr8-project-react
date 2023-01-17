import styled from "styled-components";

export const StyledFooter = styled.div`
    height: 25vh;
    font-size: 50px;
    border: 1px solid black;
    color: ${(props) => props.theme.title};
    background-color: ${props => props.theme.body};
`