import { LoginStatus } from "../providers/Auth";
import { useContext } from "react";

function ShoppingCart({ shoppingCart }) {
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
