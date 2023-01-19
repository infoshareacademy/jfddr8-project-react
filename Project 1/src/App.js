import './App.css';
import { Header } from './components/Header.js';
import { Sidebar } from './components/Sidebar.js';
import { Content } from './components/Content.js';
import { Footer } from './components/Footer.js';
import { Users } from './components/Users';
import { UsersData } from './data/users-data.js';

const logoSrc = "https://play-lh.googleusercontent.com/6hwIJLyur1myTggmf6Xzvt28Zyepgv_5zDzZQ_YBKPVHpeS8U5I1T9WNDPpUGHdnsw=s128-rw";

function App() {
  return (
    <>
    <Header title={'Tytuł aplikacji'} logoSrc={logoSrc}/>
    <main className="middle-page">
    <Sidebar MenuItems/>
    <Content><Users users={UsersData}/></Content>
    </main>
    <Footer text={'blablablablablabla'}/>
    </>
  );
}

export default App;