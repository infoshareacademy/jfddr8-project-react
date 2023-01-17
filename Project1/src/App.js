import './App.css';
import { Content } from './components/Content/Content';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Footer } from './components/Footer/Footer';
import { StyledMiddleContainer } from './Styled/MiddleContainer.style';
import { Users } from './components/Users/Users';
import { UsersData } from './data/users-data';
import { MenuItems } from './data/menu-items';
import { Links } from './components/Links';
import { Shift } from './components/Shift';
import { useState, useEffect } from 'react';
import { AppStyled } from './Styled/App.style';

function App() {
	const [usersList, setUsersList] = useState(UsersData);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [filterList, setFilterList] = useState(UsersData);
	const [searchString, setSearchString] = useState('');

	useEffect(() => {
		setFilterList(
			usersList.filter((user) =>
				user.name.toLowerCase().includes(searchString.toLowerCase())
			)
		);
	}, [searchString, usersList]);

	const changeBtn = () => {
		setIsDarkMode(!isDarkMode);
	};

	const Shift = () => {
		return (
			<button onClick={changeBtn}>
				{isDarkMode ? 'Light Theme' : 'Dark Theme'}
			</button>
		);
	};

	const handleDelete = (id) => {
		setUsersList(usersList.filter((user) => user.id !== id));
	};

	return (
		<AppStyled isDarkMode={isDarkMode}>
			<Header>
				<Shift />
			</Header>
			<StyledMiddleContainer>
				<Sidebar>
					<Links links={MenuItems} />
				</Sidebar>
				<Content>
					<Users
						handleSearch={setSearchString}
						handleDelete={handleDelete}
						users={filterList}
					/>
				</Content>
			</StyledMiddleContainer>
			<Footer />
		</AppStyled>
	);
}

export default App;
