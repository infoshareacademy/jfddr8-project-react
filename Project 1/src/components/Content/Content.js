import { StyledContent } from "./Content.style";


function Content (props) {

  return (<>
  <StyledContent>
    {props.children}  
    </StyledContent> 
 </>)
}

export default Content;
