import { StyledSideBar } from "./Sidebar.style"

function Sidebar (props) {
    return (<>
        <StyledSideBar>
            <h2>Social media</h2>
            {props.menuItems.map((element)=><a key={element.name} href={element.link}>{element.name}</a>)}   
        </StyledSideBar>
    </>)
}

export default Sidebar
