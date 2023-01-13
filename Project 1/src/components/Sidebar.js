import { MenuItems } from "../data/menu-items.js";

export function Sidebar() {
  return (
    <div>
      {MenuItems.map(
        (
          singleItem //musimy tutaj dać key dla div tylko dla reacta żeby miał
        ) => (
          //  unikatowy div a nie pomylil z innymi, coś jak ID dla reacta//przy mapie używamy i pewnie innych
          <div key={singleItem.name}>{singleItem}</div>
        )
      )}
    </div>
  );
}
