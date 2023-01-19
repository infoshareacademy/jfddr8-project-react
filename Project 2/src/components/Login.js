import { useState } from 'react';
import { Home } from './Home';

export const Login = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!login || !password) {
			alert('wpisz login i hasło');
			return;
		} else {
			localStorage.setItem('user', login);
			// tu wpisz stan z kontekstu setIsLoged
		}
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<p>Zaloguj się proszę, żeby zobaczyć produkty!</p>
			<label for='login'>Login:</label>
			<input
				type='text'
				name='login'
				id='login'
				onChange={(e) => setLogin(e.target.value)}
			/>
			<p>{login}</p>
			<p>{password}</p>
			<label for='password'>Password:</label>
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
