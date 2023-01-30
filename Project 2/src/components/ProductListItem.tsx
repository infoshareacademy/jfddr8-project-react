import App from "../App";
import { Cart } from "./ShoppingCart";

export function ProductListItem(props: {
  img: string;
  title: string;
  price: number;
  description: string;
}) {
  return (
    <div>
      <img src={props.img[0]} />
      <a>Title: {props.title}</a>
      <a>Price: {props.price}</a>
      <a>Description: {props.description}</a>
      <button onClick={Cart}>Dodaj do koszyka</button>
    </div>
  );
}
