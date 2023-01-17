import "./App.css";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { StyledMiddleContainer } from "./Styled/MiddleContainer.style";
import { Users } from "./components/Users/Users";
import { UsersData } from "./data/users-data";
import { MenuItems } from "./data/menu-items";
import { Button } from "./components/Button/Button";
import { useState } from "react";





const logoSRC = 'https://www.haloursynow.pl/img/artykuly/13214_male-rasy-psow-do-mieszkania_1.jpg?d=1569840938';



function App() {
const [data, setData] = useState(UsersData)

const handleDelete = (id) => {
  setData(data.filter((e)=>e.id !== id ))
  console.log(data)
}


{/* <p>{data === [] ? 'Lista jest pusta' : {data} }</p> */}

  return (
    <div className="app" >
      <Header title={'Małe pieski'} logoSRC={logoSRC}/>
      <StyledMiddleContainer>
        <Sidebar menuItems ={MenuItems}/>
        <Content>
          <>{data.length === 0 && <p>Error</p>}</>
          <Users handleDelete={handleDelete} users={data} />
      </Content> 
      </StyledMiddleContainer>
      <Footer text={'text'}><Button></Button></Footer>
    </div>
  );
}

export default App;
