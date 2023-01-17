import { StyledSideBar } from "./Sidebar.style"

function Sidebar (props) {


return (<>
<StyledSideBar>
{props.menuItems.map((element)=><a key={element.name} href={element.link}>{element.name}</a>)}   
</StyledSideBar>
</>)

}

export default Sidebar



// import { MenuItems } from "../data/menu-items";

// export function Sidebar() {
//   return (
//     <div className="sidebar">
//       <h2>Social links:</h2>
//       {MenuItems.map((singleItem) => (
//         <div key={singleItem.name}><a href={singleItem.link}>{singleItem.name}</a></div>
//       ))}
//     </div>
//   );
// }
