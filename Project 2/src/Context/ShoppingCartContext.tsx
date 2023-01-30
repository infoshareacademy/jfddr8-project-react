import React from "react";

type ShoppingCartContextType = {
  price: number;
  setPrice: (price: number) => void;
};
const ShoppingCartContext = React.createContext({} as ShoppingCartContextType);

export default ShoppingCartContext;
