import { ProductListItem } from './ProductListItem';
import { useState } from 'react';

export const ProductList = (props) => {
	return (
		<div>
			<h2>Product List</h2>
			<p>
				{props.products.map((el) => (
					<ProductListItem
						key={el.id}
						title={el.title}
						description={el.description}
						price={el.price}
						thumbnail={el.thumbnail}
						sumPrice={props.sumPrice}
					/>
				))}
			</p>
		</div>
	);
};
