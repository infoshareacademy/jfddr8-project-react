import "./App.css";
import { Content } from "./components/Content.js";
import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { Sidebar } from "./components/Sidebar.js";
import { UsersData } from "./data/users-data.js";
import { Users } from "./components/Users.js";
import { MenuItems } from "./data/menu-items";
import { useState } from "react";

const logoSrc =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png";
function App() {
  const data1 = UsersData;
  console.log(data1);
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className={theme}>
      {/* nawiązuje z theme do css dark i light */}
      <Header title={"Tytuł aplikacji"} logoSrc={logoSrc} />
      <main className="middle-page">
        <button onClick={changeTheme}>Zmień Kolor</button>
        <Sidebar links={MenuItems} />
        <Content user={data1}></Content>
      </main>
      <Footer text={"Sebastian Majda"} />
    </div>
  );
}

export default App;
