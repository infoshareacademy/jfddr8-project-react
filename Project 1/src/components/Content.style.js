import styled from "styled-components";

export const StyledContent = styled.div`
  border 2px solid black;
  padding: 50px;
  width: 70%;
  background-color:red;
  font-size: 15px;
  color: ${(props) => props.theme.title};
  background-color: ${props => props.theme.body};
  `;