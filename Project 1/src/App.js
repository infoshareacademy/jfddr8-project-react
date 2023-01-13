//- utwórz komponent `Users` oraz `User`, który wyświetli listę uzytkowników (nazwę oraz email)
//z pliku `users-data.js` z folderu `src/data` poprzez zaimportowanie jej w głównym komponencie aplikacji (`App`)
//i przekazanie do komponentu `Users`. Lista ma się wyświetlać wewnątrz `Content`.

import './App.css';
import { Header } from './components/Header.js';
import { Sidebar } from './components/Sidebar.js';
import { Content } from './components/Content.js';
import { Footer } from './components/Footer.js';

const logoSrc = "https://play-lh.googleusercontent.com/6hwIJLyur1myTggmf6Xzvt28Zyepgv_5zDzZQ_YBKPVHpeS8U5I1T9WNDPpUGHdnsw=s128-rw";

function App() {
  return (
    <>
    <Header title={'Tytuł aplikacji'} logoSrc={logoSrc}/>
    <main className="middle-page">
    <Sidebar MenuItems/>
    <Content/>
    </main>
    <Footer text={'blablablablablabla'}/>
    </>
  );
}

export default App;