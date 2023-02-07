import React, { useEffect, useState } from 'react';


type ProductType = {
	id: number,
	title: string,
	price: number
}

type AuthContextObj = {
	isLogged: boolean;
	setIsLogged: (isLogged: boolean) => void;
	products: ProductType[],
	setProducts: (param: ProductType[]) => void
};

type PropsChildren = {
	children: JSX.Element;
};

export const AuthContext = React.createContext<AuthContextObj>(
	{} as AuthContextObj
);

export const Auth = (props: PropsChildren): JSX.Element => {
	const [isLogged, setIsLogged] = useState(false);
	const [products, setProducts] = useState<any[]>([]);
	

	useEffect((): void => {
		localStorage.getItem('user') && setIsLogged(true);
	}, []);

	return (
		<AuthContext.Provider value={{ isLogged, setIsLogged, products, setProducts }}>
			{props.children}
		</AuthContext.Provider>
	);
};
