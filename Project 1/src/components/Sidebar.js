import { MenuItems } from "../data/menu-items.js";

export function Sidebar(props) {
  console.log(props.links);
  return (
    <div className="sidebar">
      <div className="links">
        {props.links.map((link, index) => {
          return (
            <li>
              <span>{index + 1}</span>
              <a>{link.name}</a>
              <a>{link.link}</a>
            </li>
          );
        })}
      </div>
    </div>
  );
}
