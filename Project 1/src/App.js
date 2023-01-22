import './App.css';
import { Content } from './components/Content.js';
import { Footer } from './components/Footer.js';
import { Sidebar } from './components/Sidebar.js';
import { Header } from './components/Header.js';
import {React} from 'react';
import { Users } from './components/users.js';
import {Button} from './components/button.js';
import { useState, useEffect } from 'react';
import { UsersData } from './data/users-data';
import styled, { ThemeProvider } from "styled-components";




const logoSrc = "https://www.autocentrum.pl/ac-file/car-version/57629a25582c7d19a98b7699/bmw-seria-6-f06-f12-f13-m6-gran-coupe-facelifting-m6-560km-412kw-2013-2018.jpg";

const StyledApp = styled.div``;
const darkTheme = {
  body: "green",
  title: "violet",
};
const lightTheme = {
  body: "violet",
  title: "green",
};

function App() {
  const [data, setData] = useState(UsersData);
  const [filteredData, setFilteredData] = useState(UsersData);
  const [searchInput, setSearchInput] = useState("");
  const [theme, settheme] = useState(true);
  
  useEffect(() => {
    setFilteredData(data.filter((e) => e.email.includes(searchInput)));
  }, [searchInput, data]);

  const handleDelete = (id) => {
    setData(data.filter((e) => e.id !== id));
  };
  return (


    
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <StyledApp>
    <Header title={'Tytuł aplikacji'} logoSrc={logoSrc}/>
    <main className="middle-page">
    <Sidebar links={'Linki:'} MenuItems/>
    <Content theme={theme} settheme={settheme}></Content>
    <>{filteredData.length === 0 && <p>users is empty</p>}</>
            <Users
              handleDelete={handleDelete}
              handleSearch={setSearchInput}
              users={filteredData}
            />
    </main>
    <Footer text={"text"}>
          <Button theme={theme} setTheme={settheme} ></Button>
        </Footer>
    </StyledApp>
    </ThemeProvider>
    
    
  )};
	  export default App;