import './App.css';
import { Header } from './components/Header.js';
import { Content } from './components/Header.js';
import { Sidebar } from './components/Header.js';
import { Footer } from './components/Header.js';


function App() {
  return (
    <div className="app">
        <Header 
        title="Moja aplikacja"
        logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NBC_logo.svg/800px-NBC_logo.svg.png"
        />
    </div>
  );
}

export default Header;


