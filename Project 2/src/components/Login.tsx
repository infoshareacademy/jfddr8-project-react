import React, { useState, useContext } from 'react';
import { AuthContext } from '../providers/Auth';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export const Login = (): JSX.Element => {
	const [login, setLogin] = useState<string>('');
	const [password, setPassword] = useState('');
	const { setIsLogged } = useContext(AuthContext);
	const navigate = useNavigate();

	const signIn = async (): Promise<void> => {
		try {
			await signInWithEmailAndPassword(auth, login, password)
			setIsLogged(true)
		} catch ({code}) {
			console.log(code);
		}
	}

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		try {
			await createUserWithEmailAndPassword(auth, login, password);
			setIsLogged(true)
			navigate('/home');
		} catch ({code}) {
			if (code === 'auth/email-already-in-use') {
				signIn()
			} else {
				console.log(code);
			}
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
