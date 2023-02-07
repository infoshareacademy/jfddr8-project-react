import ShoppingCart from "./ShoppingCart";
import ProductList from "./ProductList";
import ShoppingCartStatus from "./ShoppingCartStatus";
import { useState, useContext } from "react";

type ShoppingCartProduct = []

type homeProps = {
  shoppingCart: ShoppingCartProduct ;
  addToShopping:(itemPrice:number) => void;
  className:string
}


function Home(props:homeProps) {
  const [showBucket, setShowBucket ] = useState<boolean>(false)
  
  const handleButtonClick = ():void =>  {
    setShowBucket(!showBucket)
  }

  return (
    <div>
      <button
      onClick={()=>handleButtonClick()}
      >Show Shopping Cart</button>
      <ShoppingCart shoppingCart={props.shoppingCart} />
     {showBucket? <ShoppingCartStatus/> : <ProductList addToShopping={props.addToShopping} />}
      
    </div>
  );
}

export default Home;
