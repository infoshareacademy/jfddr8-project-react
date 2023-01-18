import "./App.css";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { StyledMiddleContainer } from "./Styled/MiddleContainer.style";
import { Users } from "./components/Users/Users";
import { UsersData } from "./data/users-data";
import { MenuItems } from "./data/menu-items";
import Button from "./components/Button/Button";
import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

const logoSRC =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5Y15lFLfS5X2mfk9LB_lQPc2z1RyOWxcew&usqp=CAU";

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
        <Header title={"My first React application"} logoSRC={logoSRC} />
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
        <Footer text="&copy; 2023 Copyright : Agnieszka Szczepańska">
          <Button theme={theme} setTheme={setTheme} />
        </Footer>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
