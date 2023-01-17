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
import {User} from './components/Users/User';
import {useEffect, useState} from 'react';




const logoSRC = 'https://www.haloursynow.pl/img/artykuly/13214_male-rasy-psow-do-mieszkania_1.jpg?d=1569840938';



function App() {
  const [data, setData] = useState (UsersData)
const [filteredData, setFilteredData] = useState(UsersData)
const [searchInput, setSerachInput] = useState ('');

useEffect(() => {
  setFilteredData(data.filter((e)=> e.name.includes(searchInput)))
    },[searchInput, data])

  const handleDelete = (id) => {
    setData(data.filter((e) => e.id !== id))
  
  }



  return (
    <div className="app" >
      <Header title={'Małe pieski'} logoSRC={logoSRC}/>
      <StyledMiddleContainer>
        <Sidebar menuItems ={MenuItems}/>
        <Content>
          <>{filteredData.length === 0 && <p>Users list empty!</p>}</>
          
          <Users handleDelete={handleDelete} handleSearch={setSerachInput} users={filteredData} />
        </Content> 
      </StyledMiddleContainer>
      <Footer text={'text'}><Button></Button></Footer>
      
    </div>
  );
}

export default App;
