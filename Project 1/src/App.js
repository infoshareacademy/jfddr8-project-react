import "./App.css";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Sidebar from "./components/Sidebar.js";
import Footer from "./components/Footer.js";
import { UsersData } from "./data/users-data.js";
import { User } from "./components/User";
import { Users } from "./components/Users";
import { Button } from "./components/Button";
import { MenuItems } from "./data/menu-items.js";
import { useState } from "react";

function App() {
  const [data, setData] = useState(UsersData);

  const handleDelete = (id) => {
    setData(data.filter((e) => e.id !== id));
  };

  return (
    <div className="app">
      <Header
        logoSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5Y15lFLfS5X2mfk9LB_lQPc2z1RyOWxcew&usqp=CAU"
        title="My first React application"
      ></Header>
      <div className="container">
        <Sidebar menuItems={MenuItems}></Sidebar>
        <Content>
          <>{data.length === 0 && <p>Users list empty!</p>}</>
          <Users handleDelete={handleDelete} users={data}></Users>
        </Content>
      </div>
      <Footer text="&copy; 2023 Copyright : Agnieszka Szczepańska" />
    </div>
  );
}

export default App;
