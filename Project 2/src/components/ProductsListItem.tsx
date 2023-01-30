import ShoppingCartContext from "../Context/ShoppingCartContext";
import { useContext } from "react";
import React from "react";

type ProductsListItemProps = {
  price: number;
  title: string;
  description: string;
  image: string; // lub Array<string>
};

function ProductsListItem(props: ProductsListItemProps) {
  //podmieniamy pod props->ProductsListItemProps
  const { price, setPrice } = useContext(ShoppingCartContext);
  function AddToShopping() {
    setPrice(price + props.price);
  }
  return (
    <div className="item-container">
      <img className="item-image" src={props.image}></img>
      <div>
        <div className="item-title">{props.title}</div>
        <div className="item-description">{props.description}</div>
        <div className="item-price">{props.price} $</div>
        <button onClick={AddToShopping}>Dodaj do koszyka</button>
      </div>
    </div>
  );
}

export default ProductsListItem;