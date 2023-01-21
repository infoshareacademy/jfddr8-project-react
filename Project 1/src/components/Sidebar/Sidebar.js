import { StyledMenuItem } from "./Sidebar.style";

export const Sidebar = ({ menuItems, isDarkMode }) => {
  return (
    <div>
      {menuItems.map((item) => (
        <StyledMenuItem href={item.link} key={item.name} isDarkMode={isDarkMode}>
          {item.name}
        </StyledMenuItem>
      ))}
    </div>
  );
};
