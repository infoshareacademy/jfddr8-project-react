import "./App.css";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Sidebar from "./components/Sidebar.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="app">
      <Header
        title="Tytuł aplikacji"
        logoSrc="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
      />
      <Sidebar menuItems="SidebarMenuItems" />
      <Content />
      <Footer text="FooterText" />
    </div>
  );
}

export default App;
