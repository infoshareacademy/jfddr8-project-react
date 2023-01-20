//- utwórz komponent `Users` oraz `User`, który wyświetli listę uzytkowników (nazwę oraz email)
//z pliku `users-data.js` z folderu `src/data` poprzez zaimportowanie jej w głównym komponencie aplikacji (`App`)
//i przekazanie do komponentu `Users`. Lista ma się wyświetlać wewnątrz `Content`.

import './App.css';
import { Header } from './components/Header.js';
import { Sidebar } from './components/Sidebar.js';
import { Content } from './components/Content.js';
import { Footer } from './components/Footer.js';
import { Users } from './components/Users.js';
import { UsersData } from './data/users-data.js';
import { useState , useEffect} from 'react';

const logoSrc = "https://play-lh.googleusercontent.com/6hwIJLyur1myTggmf6Xzvt28Zyepgv_5zDzZQ_YBKPVHpeS8U5I1T9WNDPpUGHdnsw=s128-rw";


function App() {

  // const [browserSearch, setBrowserSearch] = useState(document.querySelector('#browse').value);
  // useEffect((browserSearch) => if (browserSearch === "") {
  //   return (props.users.name)
  // }, [UsersData])
  const [usersList, setUsersList] = useState(UsersData);
  const [theme, setTheme] = useState('light');
  const [filteredUsersList, setFilteredUsersList] = useState(UsersData)

  const handleDelete = (id) => {
    setUsersList(usersList.filter((user) => user.id !== id))
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme ('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    setFilteredUsersList(usersList.filter((user) => user.name.includes.searchInput));
  }, ["sobie napisz"]);

  return (
    <div className="app">
            <div className={`App ${theme}`}>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    <Header title={'Tytuł aplikacji'} logoSrc={logoSrc}/>
    <main className="middle-page">
    <Sidebar MenuItems/>
    <Content>
      <input type="text" id="browse"></input>
      <Users users={filteredUsersList} handleDelete={handleDelete}  />
    </Content>
    </main>
    <Footer text={'blablablablablabla'}/>
    </div>

  );
}

export default App;