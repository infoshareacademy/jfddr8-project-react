import './App.css';
import { Content } from './components/Content/Content';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Footer } from './components/Footer/Footer';
import { StyledMiddleContainer } from './Styled/MiddleContainer.style';
import { Users } from "./components/Users/Users";
import { UsersData } from "./data/users-data";
import { MenuItems } from './data/menu-items'; 
import { Links } from './components/Links';
import { Shift } from './components/Shift';


function App() {
	return (
		<div className='app'>
			<Header><Shift/></Header>
			<StyledMiddleContainer>
				<Sidebar><Links links={MenuItems} /></Sidebar>
				<Content><Users users={UsersData} /></Content>
			</StyledMiddleContainer>
			<Footer />
		</div>
	);
}

export default App;
