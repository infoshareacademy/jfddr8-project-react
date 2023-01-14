import "./App.css";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Sidebar from "./components/Sidebar.js";
import Footer from "./components/Footer.js";
import { UsersData } from "./data/users-data.js";
import { User } from "./components/User";
import { Users } from "./components/Users";
// import Styles from "./Style.css";

function App() {
  return (
    <div className="app">
      <Header
        logoSrc="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
        title="Tytuł aplikacji"
      />
      <div className="container">
        <Sidebar menuItems="SidebarMenuItems" />
        <Content>
          <Users users={UsersData}></Users>
        </Content>
      </div>
      <Footer text="FooterText" />
    </div>
  );
}

export default App;
