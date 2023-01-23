import { useContext } from "react";
import ShoppingCartContext from "../Context/ShoppingCartContext";
import Auth from "../Context/Auth";

function ShoppingCart() {
  const [price] = useContext(ShoppingCartContext);
  const [isLogged, setIsLogged] = useContext(Auth);

  function Logout() {
    setIsLogged(false);
    console.log(isLogged);
  }

  return (
    <div>
      <div>SUM:{price}$</div>
      <button onClick={Logout}>Log out</button>
    </div>
  );
}

export default ShoppingCart;
