import { useState } from 'react'

function ProductsListItem(props) {
    const [shoppingCart, setshoppingCart] = useState(props.price);

    const addToShopping = () => {
        setshoppingCart(shoppingCart + props.price);
    };
    return (
        <div classname='item-container'>
            <div>
                <img classname='item-image' src={props.images[0]}></img>
            </div>
            <div>
                <div classname='item-title'>{props.title}</div>
                <div classname='item-descripton'>{props.description}</div>
                <div classname='item-price'>{props.price}</div>
                <button onClick={addToShopping}>Dodaj do koszyka</button>
            </div>
        </div>
    )
}

export default ProductsListItem