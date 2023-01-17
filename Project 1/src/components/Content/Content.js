import { StyledContent } from "./Content.style";


function Content (props) {
  return (
  <StyledContent><p>Main</p>
    {props.children}
    </StyledContent>)
}

export default Content;
