import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: ${({ isDarkMode }) => (isDarkMode ? "#000" : "#fff")};
  grid-column-start: 1;
  grid-column-end: -1;
  text-align: center;
  padding: 30px;
  border: 2px solid darkblue;
`;
