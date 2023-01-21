import styled from "styled-components";

export const StyledContent = styled.div`
  background: ${({ isDarkMode }) => (isDarkMode ? "#000" : "#fff")};
  border: 2px solid darkblue;
`;
