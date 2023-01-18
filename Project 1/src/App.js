import "./App.css";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { StyledMiddleContainer } from "./Styled/MiddleContainer.style";
import { Users } from "./components/Users/Users";
import { UsersData } from "./data/users-data";
import { MenuItems } from "./data/menu-items";
import  Button  from "./components/Button/Button";
import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

const logoSrc = "https://play-lh.googleusercontent.com/6hwIJLyur1myTggmf6Xzvt28Zyepgv_5zDzZQ_YBKPVHpeS8U5I1T9WNDPpUGHdnsw=s128-rw";

const StyledApp = styled.div``;
const darkTheme = {
  body: "#1c1c1c",
  title: "#fff",
};
const lightTheme = {
  body: "#fff",
  title: "#1c1c1c",
};

function App() {
  const [data, setData] = useState(UsersData);
  const [filteredData, setFilteredData] = useState(UsersData);
  const [searchInput, setSearchInput] = useState("");
  const [theme, setTheme] = useState(true);
 


  useEffect(() => {
    setFilteredData(data.filter((e) => e.name.includes(searchInput)));
  }, [searchInput, data]);

  const handleDelete = (id) => {
    setData(data.filter((e) => e.id !== id));
  };

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <StyledApp>
        <Header title={<h1>My first application</h1>} logoSrc={logoSrc} />
        <StyledMiddleContainer>
          <Sidebar menuItems={MenuItems} />
          <Content>
            <>{filteredData.length === 0 && <p>Error</p>}</>
            <Users
              handleDelete={handleDelete}
              handleSearch={setSearchInput}
              users={filteredData}
            />
          </Content>
        </StyledMiddleContainer>
        <Footer text={"text"}>
          <Button theme={theme} setTheme={(text)=>setTheme(text)} />
        </Footer>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;


// import './App.css';
// import { Header } from './components/Header';
// import { Sidebar } from './components/Sidebar';
// import { Content } from './components/Content';
// import { Footer } from './components/Footer';
// import { UsersData } from './data/users-data';
// import { Users } from './components/Users';
// import { Button } from './components/Button';
// import { useEffect, useState } from 'react';
// import styled, { ThemeProvider } from 'styled-components';


// const logoSrc = "https://play-lh.googleusercontent.com/6hwIJLyur1myTggmf6Xzvt28Zyepgv_5zDzZQ_YBKPVHpeS8U5I1T9WNDPpUGHdnsw=s128-rw";

// const StyledApp = styled.div``
//   const darkTheme = {
//     body: '1c1c1c',
//     title: '#fff',
//   };

//   const lightTheme = {
//     body: '#fff',
//     title: '1c1c1c',
//   };

// function App() {

//   const [data, setData] = useState(UsersData)
//   const [filteredData, setFilteredData] = useState(UsersData)
//   const [searchInput, setSearchInput] = useState("")

//   const [theme, SetTheme] = useState(false)

//   const handleDelete = (id) => {
//     setData(data.filter((e) => e.id !== id)) 
//   }

//   useEffect(() => {
//     setFilteredData(data.filter((e) => e.name.includes(searchInput)))
//   },[searchInput, data])

  

//   return (
//     <ThemeProvider theme={theme ? darkTheme : lightTheme}>
//     <StyledApp>
//     <Header title={<h1>My first application</h1>} logoSrc={logoSrc}>
//     <Button theme={theme} SetTheme={SetTheme}/>  
//     </Header>
//     <main className="middle-page">
//     <Sidebar MenuItems/>
//     <Content>
//     <>{data.length === 0 && <p>Users list empty!</p>}</> 
//     <Users handleDelete={handleDelete} handleSearch={setSearchInput} usersList={filteredData}/></Content>
//     </main>
//     <Footer text={<h2>The Footer is located at this point</h2>}/>
//     </StyledApp>
//     </ThemeProvider>
//   );
// }

// export default App;
