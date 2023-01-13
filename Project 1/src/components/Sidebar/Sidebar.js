import { StyledSideBar } from "./Sidebar.style"


function Sidebar (props) {


return (<>
<StyledSideBar>
{props.menuItems.map((element)=><a href src={element.link}>{element.name}</a>)}   
</StyledSideBar>
</>)



}

export default Sidebar