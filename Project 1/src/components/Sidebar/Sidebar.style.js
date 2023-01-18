import styled from "styled-components";

export const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  color: ${(props) => props.theme.title};
  background-color: ${(props) => props.theme.body};
`;
