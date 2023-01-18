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
import { User } from "./components/Users/User";
import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

const logoSRC = "https://pbs.twimg.com/media/CUmf7xQW4AA48Q7.jpg";

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
  const [searchInput, setSerachInput] = useState("");
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    setFilteredData(
      data.filter((user) =>
        user.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput, data]);

  const handleDelete = (id) => {
    setData(data.filter((e) => e.id !== id));
  };

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <StyledApp>
        <Header
          title={"Professinal Page by Acme Corporation"}
          logoSRC={logoSRC}
        />
        <StyledMiddleContainer>
          <Sidebar menuItems={MenuItems} />
          <Content>
            <>{filteredData.length === 0 && <p>Users list empty!</p>}</>

            <Users
              handleDelete={handleDelete}
              handleSearch={setSerachInput}
              users={filteredData}
            />
          </Content>
        </StyledMiddleContainer>
        <Footer text={"Click to change theme->"}>
          <Button theme={theme} setTheme={setTheme} />
        </Footer>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
