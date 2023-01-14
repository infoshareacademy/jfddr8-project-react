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




const logoSRC = 'https://www.haloursynow.pl/img/artykuly/13214_male-rasy-psow-do-mieszkania_1.jpg?d=1569840938';



function App() {
  return (
    <div className="app" >
      <Header title={'Małe pieski'} logoSRC={logoSRC}/>
      <StyledMiddleContainer>
        <Sidebar menuItems ={MenuItems}/>
        <Content><Users users={UsersData} /></Content> 
      </StyledMiddleContainer>
      <Footer text={'text'}><Button></Button></Footer>
      
    </div>
  );
}

export default App;
