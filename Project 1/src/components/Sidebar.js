import { StyledSidebar } from "./Sidebar.style";
import { MenuItems } from "../data/menu-items";

export function Sidebar () {

    return (
        <StyledSidebar>
            {MenuItems.map((singleItem => (
                <div key={singleItem.name}><a href={singleItem.link}>{singleItem.name}</a> </div>
            )))}
        </StyledSidebar>
    )

}

