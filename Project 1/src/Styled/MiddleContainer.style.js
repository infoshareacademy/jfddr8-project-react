import styled from "styled-components";


export const StyledMiddleContainer = styled.div`
    display:flex;
    height:60vh;
    font-size: 20px;
    color: ${(props) => props.theme.title};
    background-color: ${props => props.theme.body};
`