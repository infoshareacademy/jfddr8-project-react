import { StyledContent } from "./Content.style";

function Content (props) {
  return (<>
  
  <StyledContent>
    <div><h2>User List</h2></div>
    <div>{props.children} </div> 
    </StyledContent> 
  </>)
}

export default Content;
