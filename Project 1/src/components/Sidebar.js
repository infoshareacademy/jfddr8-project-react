function Sidebar(props) {
  return (
    <div>
      <h2>Social media links:</h2>
      <ul>
        {props.menuItems.map((item) => (
          <li>
            {item.name} : {item.link}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
