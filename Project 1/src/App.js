import "./App.css";
import { Content } from "./components/Content.js";
import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { Sidebar } from "./components/Sidebar.js";

const logoSrc =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png";
function App() {
  return (
    <>
      <Header title={"Tytuł aplikacji"} logoSrc={logoSrc} />
      <main className="middle-page">
        <Sidebar MenuItems />
        <Content />
      </main>
      <Footer text={"Sebastian Majda"} />
    </>
  );
}

export default App;
