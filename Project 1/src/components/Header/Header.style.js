import styled from "styled-components";

export const StyledHeader = styled.header`
  background: ${({ isDarkMode }) => (isDarkMode ? "#000" : "#fff")};
  grid-column-start: 1;
  grid-column-end: -1;
  border: 2px solid darkblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
`;

export const StyledH = styled.h1`
  font-size: 30px;
`;

export const StyledLogo = styled.img`
  max-height: 100%;
`;
