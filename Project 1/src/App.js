import './App.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { UsersData } from './data/users-data';
import { Users } from './components/Users';
import { useState } from 'react';

const logoSrc = "https://play-lh.googleusercontent.com/6hwIJLyur1myTggmf6Xzvt28Zyepgv_5zDzZQ_YBKPVHpeS8U5I1T9WNDPpUGHdnsw=s128-rw";

function App() {

  const [data, setData] = useState(UsersData)

  const handleDelete = (id) => {
    setData(data.filter((e) => e.id !== id)) 
  }

  return (
    <div>
    <Header title={'Title of application'} logoSrc={logoSrc}></Header>
    <main className="middle-page">
    <Sidebar MenuItems/>
    <Content>
    <>{data.length === 0 && <p>Users list empty!</p>}</> 
    <Users handleDelete={handleDelete} usersList={data}/></Content>
    </main>
    <Footer text={'The Footer is located at this point'}/>
    </div>
  );
}

export default App;
