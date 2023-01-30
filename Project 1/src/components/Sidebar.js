import { MenuItems } from "../data/menu-items.js";

export function Sidebar() {
  return (
    <div className="sidebar">
      {MenuItems.map((singleItem) => (
        <div key={singleItem.name}>{singleItem.name}</div>
      ))}
    </div>
  );
}
