import {MenuItems} from "../data/menu-items.js"

function Sidebar() {
    return (
        <div className="main sidebar" >
          {MenuItems.map((singleItem) => (
          <div key={singleItem.name}>{singleItem.name}</div>))}
        </div>
      )
    }
export default Sidebar