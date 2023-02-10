import "./App.css";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { StyledContainer } from "./components/StyledContainer";
import { User } from "./components/Users/User";
import { Users } from "./components/Users/Users";
import { UsersData } from "./data/users-data";
import { AppStyled } from "./components/App.style";
import { Button } from "./components/Button";
import { useState } from "react";
import { useEffect } from "react";
import { StyledButton } from "./components/Button.style";

const logoSrc = "https://czasdzieci.pl/pliki/ro_obr/2014/image001_(2).png"


function App() {
  const [usersList, setUsersList] = useState(UsersData);
  const [filterList, setFilterList] = useState(UsersData);
  const [searchString, setSearchString] = useState("");
  

  useEffect(() => {
    setFilterList(
      usersList.filter((user) =>
        user.name.toLowerCase().includes(searchString.toLowerCase())
      )
    );
  }, [searchString, usersList]);

  const handleDelete = (id) => {
    setUsersList(usersList.filter((user) => user.id !== id));
  };

  return (
    <AppStyled>
      <Header title={"Title"} logoSrc={logoSrc} ></Header>
      <StyledContainer>
        <Sidebar MenuItems />
        <Content>
          <>{filterList.length === 0 && <p>Users list empty</p>}</>
          <Users
            handleSearch={setSearchString}
            handleDelete={handleDelete}
            users={filterList}
          />
        </Content>
      </StyledContainer>
      <Footer text={"The Footer"} />
    </AppStyled>
  );
}

export default App;
