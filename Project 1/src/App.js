import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Footer from './components/Footer';
import {Users} from './components/Users.js';
import {UsersData} from './data/users-data.js';
import {useState , useEffect} from 'react';




function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    }else {
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
      <div className='header'>
        <Header 
        logoSrc="https://www.clipartmax.com/png/small/469-4691996_logo-clipart-website-bbcpersian7-collections-world-wide-web-icon-png.png"
        title="Moja aplikacja"
        />
      </div>
      <div className="container">
        <Sidebar
        MenuItems
        />
        <Content>
          <Users users={UsersData}/>
        </Content>
      </div>
      <div className="footer">
        <Footer 
        subskrypcja="Zapisz się do subskrypcji"/>
      </div>
    </div>
  );
}

export default App;