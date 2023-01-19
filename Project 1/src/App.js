import "./App.css";
import { Naglowek } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { List } from "./components/Users";
import { UsersData } from "./data/users-data";
import { MenuItems } from "./data/menu-items";

function App() {
  return (
    <div className="app">
      <div className="header">
        <Naglowek
          className="header"
          title="Projekt 1"
          logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        />
      </div>
      <div className="sidebar">
        <Sidebar menuItems={ MenuItems } />
      </div>
      <div className="content">
        <Content>
          <List data={UsersData} />
        </Content>
      </div>
      <div className="footer">
        <Footer text="stopka" />
      </div>
    </div>
  );
}

export default App;
