import styled from "styled-components";

export const StyledUser = styled.div`
  background: ${({ isDarkMode }) => (isDarkMode ? "#000" : "#fff")};
  padding: 20px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
`;
