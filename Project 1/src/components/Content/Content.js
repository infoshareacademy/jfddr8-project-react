import { StyledContent } from "./Content.style";

function Content (props) {

  return (<>
  <StyledContent>
    {props.children}  
    </StyledContent> 
  </>)
}

export default Content;


// export function Content(props) {
//   return (
//     <div className="content">User list:
//     <div> {props.children}</div>
//     </div>
//   );
// }
