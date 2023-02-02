import { AuthContext } from '../providers/Auth';
import { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export const ShoppingCart: React.FC<{ price: number }> = (props) => {
	const { setIsLogged } = useContext(AuthContext);

	const logoutHandler = () => {
		setIsLogged(false);
		signOut(auth);
	};

	return (
		<div>
			<h1>Total Product Price: {props.price}</h1>
			<button onClick={() => logoutHandler()}>Log out</button>
		</div>
	);
};
