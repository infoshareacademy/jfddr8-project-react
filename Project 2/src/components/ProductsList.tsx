// odpowiedzialny za wyświetlenie listy produktów
import React from 'react';
import { ProductsListItem } from './ProductsListItem';
import {ProductsData} from '../data/products';



export const ProductsList = ({SumPrice}) => {
	return (
		<div>
			<h2>Product List</h2>
			<div>
				{ProductsData.map((el) => (
					<ProductsListItem
					SumPrice={SumPrice}
					images={el.images}
						title={el.title}
						description={el.description}
						price={el.price}
					/>
				))}
			</div>
		</div>
	);
};