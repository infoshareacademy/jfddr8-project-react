import { StyledContent } from "./Content.style";


function Content (props) {
  return (
  <StyledContent><p>User List:</p>
    {props.children}
    </StyledContent>)
}

export default Content;
