import ShoppingCartContext from "../Context/ShoppingCartContext";
import { useContext } from "react";
import React from "react";

function ProductsListItem(props) {
  const PriceSum = useContext(ShoppingCartContext);
  console.log(PriceSum);
  function AddToShopping() {}
  return (
    <div className="item-container">
      <img className="item-image" src={props.images[0]}></img>
      <div>
        <div className="item-title">{props.title}</div>
        <div className="item-description">{props.description}</div>
        <div className="item-price">{props.price} $</div>
        <button onClick={() => {}}>Dodaj do koszyka</button>
      </div>
    </div>
  );
}

export default ProductsListItem;
