import React, { useEffect, useState } from 'react';

export const AuthContext = React.createContext([]);

export const Auth = (props) => {
	const [isLogged, setIsLogged] = useState(false);

	useEffect(() => {
		localStorage.getItem('user') && setIsLogged(true);
	}, []);

	return (
		<AuthContext.Provider value={{ isLogged, setIsLogged }}>
			{props.children}
		</AuthContext.Provider>
	);
};
