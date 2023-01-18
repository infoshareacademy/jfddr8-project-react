import styled from "styled-components";

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  font-size: 30px;
  color: ${(props) => props.theme.title};
  background-color: ${(props) => props.theme.body};
`;
