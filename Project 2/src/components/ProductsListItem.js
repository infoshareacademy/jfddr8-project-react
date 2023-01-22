import { useState } from "react"

export function ProductListItem(props) {
    const [shoppingCart, setShoppingCart] = useState(props);

    const addToShopping = () => {
        setShoppingCart(shoppingCart + props);
        console.log('sh:', shoppingCart);
    };

    return (
        <div className="item-constainer">
            <div>
                <img className="item-image" src={props.images[0]}></img>
            </div>
            <div>
                <div className="item-title">{props.title}</div>
                <div className="item-description">{props.description}</div>
                <div className="item-price">{props.price} $</div>
                <button onClick={()=>props.addToShopping(props.price)}>Dodaj do koszyka</button>
            </div>
        </div>
    )
}

export default ProductsListItem