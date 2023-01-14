import './App.css';
import { Header } from './components/Header.js';
import { Sidebar } from './components/Sidebar.js';
import { Content } from './components/Content.js';
import { Footer } from './components/Footer.js';
import { UsersData } from "./data/users-data.js";
import { Users } from './components/Users.js';

const logoSrc = "https://play-lh.googleusercontent.com/6hwIJLyur1myTggmf6Xzvt28Zyepgv_5zDzZQ_YBKPVHpeS8U5I1T9WNDPpUGHdnsw=s128-rw";

function App() {
  return (
    <>
    <Header title={'My first app'} logoSrc={logoSrc}/>
    <main className="middle-page">
    <Sidebar MenuItems/>
    <Content><Users usersList={UsersData}/></Content>
    </main>
    <Footer text={'The Footer is located at this point'}/>
    </>
  );
}

export default App;