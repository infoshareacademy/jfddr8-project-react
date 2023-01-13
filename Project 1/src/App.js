import './App.css';
import { Header } from './components/Header.js';
import { Sidebar } from './components/Sidebar.js';
import { Content } from './components/Content.js';
import { Footer } from './components/Footer.js';

function App() {
  return (
    <>
    <Header title={'Tytuł aplikacji'} logoSrc/>
    <Sidebar MenuItems/>
    <Content/>
    <Footer text={'blablablablablabla'}/>
    </>
  );
}

export default App;