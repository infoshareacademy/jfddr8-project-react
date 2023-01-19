import { ProductListItem } from './ProductListItem';
import { ShoppingCart } from './ShoppingCart';

export const Home = (props) => {
	return (
		<div>
			<ProductList sumPrice={SumPrice} />
			<ShoppingCart />
		</div>
	);
};
