import "./App.css";
import { Naglowek } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { List } from "./components/Users";
import { UsersData } from "./data/users-data";
import { MenuItems } from "./data/menu-items";
import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light")

const toggleTheme = (event) => {
  console.log(theme)
  event.stopPropagation()
  if (theme === "light") {
    setTheme("dark")
  } else {
    setTheme("light")
  }
}

  return (
    <ThemeContext.Provider>
      <div className="app" id="light">
        <div className="header">
          <Naglowek
            className="header"
            title="Projekt 1"
            logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
        <button onClick={toggleTheme}>zmień motyw</button>
        </div>
        <div className="sidebar">
          <Sidebar menuItems={MenuItems} />
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
    </ThemeContext.Provider>
  );
}

export default App;
