import React, { useState, useContext } from 'react';
import { AuthContext } from '../providers/Auth';

export const Login = (): JSX.Element => {
	const [login, setLogin] = useState<string>('');
	const [password, setPassword] = useState('');
	const { setIsLogged } = useContext(AuthContext);

	const handleSubmit = (event: React.FormEvent): void => {
		event.preventDefault();
		if (!login || !password) {
			alert('wpisz login i hasło');
			return;
		} else {
			localStorage.setItem('user', login);
			setIsLogged(true);
		}
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<p>Please enter your login to see our products!</p>
			<label htmlFor='login'>Login:</label>
			<input
				type='text'
				name='login'
				id='login'
				onChange={(e) => setLogin(e.target.value)}
			/>
			<label htmlFor='password'>Password:</label>
			<input
				type='password'
				name='password'
				id='password'
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button>Zapisz</button>
		</form>
	);
};
