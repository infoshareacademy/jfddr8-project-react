import styled from "styled-components";

export const StyledMenuItem = styled.a`
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
  display: block;
`;
