// odpowiedzialny za wyświetlenie listy produktów
import { ProductsListItem } from './ProductsListItem';

export const ProductsList = (props) => {
	return (
		<div>
			<h2>Product List</h2>
			<p>
				{props.products.map((el) => (
					<ProductsListItem
						title={el.title}
						description={el.description}
						price={el.price}
					/>
				))}
			</p>
		</div>
	);
};