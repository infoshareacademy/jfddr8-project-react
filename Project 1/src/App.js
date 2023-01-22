import './App.css';
import { Header } from './components/Header.js';
import { Sidebar } from './components/Sidebar.js';
import { Content } from './components/Content.js';
import { Footer } from './components/Footer.js';
import { Users } from './components/Users';
import { UsersData } from './data/users-data.js';
import React, {useState, useEffect} from 'react';

const logoSrc = "https://play-lh.googleusercontent.com/6hwIJLyur1myTggmf6Xzvt28Zyepgv_5zDzZQ_YBKPVHpeS8U5I1T9WNDPpUGHdnsw=s128-rw";


function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    };
  }
  
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="app">
      Put solution here
    <>
    <Header title={'Tytuł aplikacji'} logoSrc={logoSrc}/>
    <main className="middle-page">
    <div>
    <Sidebar MenuItems/>
    <Content><Users users={UsersData}/></Content>
    </div>
    </main>
    <Footer text={'jakiś tekst'}/>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
    </div>
  );
}

export default App;




