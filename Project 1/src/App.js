import { useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Content } from "./components/Content/Content";
import { Footer } from "./components/Footer/Footer";
import { Users } from "./components/Users/Users";
import { UsersData } from "./data/users-data";
import { MenuItems } from "./data/menu-items";

const StyledContainer = styled.div`
  background: ${({ isDarkMode }) => (isDarkMode ? "#000" : "#fff")};
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
  padding: 40px 100px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [usersList, updateUsersList] = useState(UsersData);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [filteredUsersList, setFilteredUsersList] = useState(UsersData);

  useEffect(() => {
    setFilteredUsersList(usersList.filter((user) => user.name.toLowerCase().includes(searchPhrase.toLowerCase())));
  }, [searchPhrase, usersList]);

  const handleSwitchTheme = () => setIsDarkMode(!isDarkMode);
  const handleDelete = (id) => {
    updateUsersList(usersList.filter((user) => user.id !== id));
  };

  return (
    <StyledContainer isDarkMode={isDarkMode}>
      <Header
        title={"Users app"}
        logoSrc={
          "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        }
        handleSwitchTheme={handleSwitchTheme}
        isDarkMode={isDarkMode}
      />
      <Sidebar menuItems={MenuItems} isDarkMode={isDarkMode} />
      <Content isDarkMode={isDarkMode}>
        <Users
          users={filteredUsersList}
          isDarkMode={isDarkMode}
          handleDelete={handleDelete}
          handleSearch={setSearchPhrase}
        />
      </Content>
      <Footer text={"About Us"} isDarkMode={isDarkMode} />
    </StyledContainer>
  );
}

export default App;
