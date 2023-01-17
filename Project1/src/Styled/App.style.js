import styled from "styled-components";

export const AppStyled = styled.div`
background-color: ${(props) => (props.isDarkMode ? 'black' : 'white')};
`