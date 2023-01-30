import { AuthContext } from '../providers/Auth';
import { useContext } from 'react';

export const ShoppingCart: React.FC<{price: number}> = (props) => {
	const { setIsLogged } = useContext(AuthContext);

	const logoutHandler = () => {
		setIsLogged(false);
		localStorage.removeItem('user');
	};

	return (
		<div>
			<h1>Total Product Price: {props.price}</h1>
			<button onClick={() => logoutHandler()}>Log out</button>
		</div>
	);
};
