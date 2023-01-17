import styled from "styled-components";

export const StyledContent = styled.div`
    width: 70%;
    height:100%;
    border: 1px solid black;
    color: ${(props) => props.theme.body};
    background-color: ${props => props.theme.body};

`;