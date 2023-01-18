import styled from "styled-components";

export const StyledFooter = styled.div`
  height: 25vh;
  font-size: 15px;
  color: ${(props) => props.theme.title};
  background-color: ${(props) => props.theme.body};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
