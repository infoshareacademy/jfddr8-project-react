import { useState } from 'react';

export const ProductListItem = (props) => {
	return (
		<div>
			<img src={props.thumbnail} style={{ width: 80 + 'px' }}></img>
			{props.title} {props.description} {props.price}
			<button onClick={() => props.sumPrice(props.price)}>
				Dodaj do koszyka
			</button>
		</div>
	);
};
