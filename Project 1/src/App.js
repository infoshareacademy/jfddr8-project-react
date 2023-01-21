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

  const [usersList, setUsersList] = useState(UsersData);
  const [theme, setTheme] = useState('light');
  const [filteredUsersList, setFilteredUsersList] = useState(UsersData)
  const [searchPhrase, setSearchPhrase] = useState("")

  const handleDelete = (id) => {
    setUsersList(usersList.filter((user) => user.id !== id))
  }

  useEffect(() => {
    setFilteredUsersList(usersList.filter((user) => user.name.toLowerCase().includes(searchPhrase.toLowerCase())));
  }, [searchPhrase, usersList]);

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

  return (
    <div className="app">
            <div className={`App ${theme}`}>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    <Header title={'Tytuł aplikacji'} logoSrc={logoSrc}/>
    <main className="middle-page">
    <Sidebar MenuItems/>
    <Content>
      <Users users={filteredUsersList} handleDelete={handleDelete} handleSearch={setSearchPhrase} />
    </Content>
    </main>
    <Footer text={'blablablablablabla'}/>
    </div>

  );
}

export default App;