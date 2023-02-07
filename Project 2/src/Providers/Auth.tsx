import React, { useEffect, useState } from "react";

type ShoppingCartProduct = {
  id: number;
  price:number;
  title:string
} 
type StoreStatusType = {
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void;
  setShoppingCart:(param:ShoppingCartProduct[] )=>void;
  shoppingCart: ShoppingCartProduct[] 
};

type PropsWithChildren = {
  children: JSX.Element;
};



export const LoginStatus = React.createContext<StoreStatusType>(
  {} as StoreStatusType
);
const Auth = (props: PropsWithChildren): JSX.Element => {
  const [isLogged, setIsLogged] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([] as ShoppingCartProduct[] );
  useEffect(():void => {
    localStorage.getItem("user") && setIsLogged(true);
  }, []);

  return (
    <LoginStatus.Provider value={{ isLogged, setIsLogged, shoppingCart, setShoppingCart }}>
      {props.children}
    </LoginStatus.Provider>
  );
};

export default Auth;
