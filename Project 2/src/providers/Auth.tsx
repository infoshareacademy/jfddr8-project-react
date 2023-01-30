import React, { useEffect, useState } from 'react';

type AuthContextObj = {
	isLogged: boolean;
	setIsLogged: (isLogged: boolean) => void;
};

type PropsChildren = {
	children: JSX.Element;
};

export const AuthContext = React.createContext<AuthContextObj>(
	{} as AuthContextObj
);

export const Auth = (props: PropsChildren): JSX.Element => {
	const [isLogged, setIsLogged] = useState(false);

	useEffect((): void => {
		localStorage.getItem('user') && setIsLogged(true);
	}, []);

	return (
		<AuthContext.Provider value={{ isLogged, setIsLogged }}>
			{props.children}
		</AuthContext.Provider>
	);
};
