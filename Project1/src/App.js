import './App.css';
import {Content} from './components/Content/Content';
import {Header} from './components/Header/Header';
import {Sidebar} from './components/Sidebar/Sidebar';
import {Footer} from './components/Footer/Footer';


function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;