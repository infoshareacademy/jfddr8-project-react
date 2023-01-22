import styled from "styled-components";


export const ButtonStyled = styled.button`
padding: 10px;
color: ${(props) => props.theme.body};
background-color: ${props => props.theme.title};
`;