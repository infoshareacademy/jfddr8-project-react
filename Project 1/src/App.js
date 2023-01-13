import "./App.css";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { StyledMiddleContainer } from "./Styled/MiddleContainer.style";
import { User } from "./components/Users/User";
import { Users } from "./components/Users/Users";
import { UsersData } from "./data/users-data";

function App() {
  return (
    <div className="app">
      <Header />
      <StyledMiddleContainer>
        <Sidebar />
        <Content><Users users={UsersData} /></Content> 
      </StyledMiddleContainer>
      <Footer />
    </div>
  );
}

export default App;
