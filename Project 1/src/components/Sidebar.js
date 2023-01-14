import { MenuItems } from "../data/menu-items";

export function Sidebar() {
  return (
    <div className="sidebar">
      {MenuItems.map((singleItem) => (
        <div key={singleItem.name}><a href={singleItem.link}>{singleItem.name}</a></div>
      ))}
    </div>
  );
}