import { ProductListItem } from './ProductListItem';

export const ProductList = (props) => {
	return (
		<div>
			<h2>Product List</h2>
			<p>
				{props.products.map((el) => (
					<ProductListItem
						title={el.title}
						description={el.description}
						price={el.price}
					/>
				))}
			</p>
		</div>
	);
};
