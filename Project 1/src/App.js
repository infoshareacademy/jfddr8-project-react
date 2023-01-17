import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Footer from './components/Footer';
import {Users} from './components/Users.js';
import {UsersData} from './data/users-data.js';



function App() {
  return (
    <div className="app">
      <
      <Header 
      title="Moja aplikacja"
      logoSrc="https://www.clipartmax.com/png/small/469-4691996_logo-clipart-website-bbcpersian7-collections-world-wide-web-icon-png.png"
      />
      <div className="container">
      <Sidebar
      MenuItems
      />
      <Content>
        <Users users={UsersData}/>
      </Content>
      </div>
      <Footer
      subskrypcja="Zapisz się do subskrypcji"/>
    </div>
  );
}

export default App;