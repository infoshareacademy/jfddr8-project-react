import "./App.css";
import { Naglowek } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { List } from "./components/Users";
import { UsersData } from "./data/users-data";
import { MenuItems } from "./data/menu-items";
import { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Provider } from "./components/ThemeContext";
import { ThemeContext } from "./components/ThemeContext";

const darkTheme = {
  body: "hsl(0, 0%, 20%)",
  background: "hsl(0, 0%, 40%)",
  font: "hsl(0, 0%, 80%)",
};

const lightTheme = {
  body: "white",
  background: "hsl(0, 0%, 85%)",
  font: "black",
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.font};
  }`;

const Header = styled.div`
  grid-area: header;
  background-color: ${(props) => props.theme.background};
  border: 3px solid black;
  display: flex;
  justify-content: space-between;
`;

const Side = styled.div`
  grid-area: sidebar;
  background-color: ${(props) => props.theme.background};
  border: 3px solid black;
`;
const Main = styled.div`
  grid-area: content;
  background-color: ${(props) => props.theme.background};
  border: 3px solid black;
`;
const Foot = styled.div`
  grid-area: footer;
  background-color: ${(props) => props.theme.background};
  border: 3px solid black;
`;

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div className="app">
        <Header>
          <Naglowek
            className="header"
            title="Projekt 1"
            logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
        </Header>
        <Side>
          <Sidebar menuItems={MenuItems} />
        </Side>
        <Main>
          <Content>
            <List data={UsersData} />
          </Content>
        </Main>
        <Foot>
          <Footer text="stopka" />
        </Foot>
      </div>
    </ThemeProvider>
  );
}

export default App;
