import { useState } from "react";

export const ProductListItem = (props) => {

    const [price, setPrice] = useState([])

    const SumPrice = () => {
        console.log(props.price);
    }

	return (
		<div>
			{props.title} {props.description} {props.price}
            <button onClick={SumPrice}>Dodaj do koszyka</button>
		</div>
	);
};
