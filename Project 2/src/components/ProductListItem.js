import App from "../App"
import styles from "../App.css"
import { Cart } from "./ShoppingCart.js"

export function ProductListItem (props) {
    return(
        <div>
            <img src={props.img[0]}/>
            <a>Title: {props.title}</a>
            <a>Price: {props.price}</a>
            <a>Description: {props.description}</a>
            <button onClick={Cart}>Dodaj do koszyka</button>
        </div>
    )
}