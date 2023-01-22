import { MenuItems } from "../data/menu-items.js";
import {Stylesidebar} from "./Sidebar.style.js";

export function Sidebar({links}) {
  return (
    
        <Stylesidebar>
    <div>{links}</div>
        {MenuItems.map((singleItem) => (
        <div key={singleItem.name}>{singleItem.link}</div>
      ))} 
    
    </Stylesidebar>
  );
}
