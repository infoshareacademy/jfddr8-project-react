import React, { createContext, useEffect, useState } from "react";

export type CartProduct = {
  id: number;
  title: string;
  price: number;
}

type StoreContextState = {
  username: string | null;
  setUsername: (username: string | null) => void;
  cartValue: number;
  setCartValue: (value: number) => void;
  cartProducts: CartProduct[];
  setCartProducts: (products: CartProduct[]) => void;
}

type StoreProviderProps = {
  children: React.ReactNode;
}

export const StoreContext = createContext<StoreContextState>({} as StoreContextState);

export const StoreProvider = ({ children }: StoreProviderProps): JSX.Element => {
  const [username, setUsername] = useState<string | null>('');
  const [cartValue, setCartValue] = useState<number>(0);
  const [cartProducts, setCartProducts] = useState([] as CartProduct[]);

  useEffect(() => {
    const sumPrice = cartProducts.reduce((acc, obj) => {
      return acc + obj.price;
    }, 0);
    setCartValue(sumPrice);
  }, [cartProducts]);

  return (
    <StoreContext.Provider value={{username, setUsername, cartValue, setCartValue, cartProducts, setCartProducts}}>
      {children}
    </StoreContext.Provider>
  );
};