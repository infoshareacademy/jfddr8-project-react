import { useContext } from "react";
import ShoppingCartContext from "../Context/ShoppingCartContext";

function ShoppingCart() {
  const [price] = useContext(ShoppingCartContext);
  return <div>SUM:{price}$</div>;
}

export default ShoppingCart;
