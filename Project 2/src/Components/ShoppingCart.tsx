import { LoginStatus } from "../Providers/Auth";
import { useContext } from "react";

type shoppingCartType = {
  shoppingCart:number
}

function ShoppingCart({ shoppingCart }:shoppingCartType) {
  const { setIsLogged } = useContext(LoginStatus);
  const handleLogOut = () => {
    setIsLogged(false);
    localStorage.removeItem("user");
  };

  return (
    <div>
      Price
      <p>{shoppingCart}$</p>
      <button onClick={() => handleLogOut()}>Log out</button>
    </div>
  );
}

export default ShoppingCart;