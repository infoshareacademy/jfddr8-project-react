import "./App.css";
import { Naglowek } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";


function App() {
  return (
    <div className="app">
      <Naglowek
        title="Projekt 1"
        logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
      />
      <Sidebar menuItems="test" />
      <Content />
      <Footer text="stopka"/>
    </div>
  );
}

export default App;
