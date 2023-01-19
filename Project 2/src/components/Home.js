import { ProductListItem } from './ProductListItem';
import { ShoppingCart } from './ShoppingCart';
import { ProductList } from './ProductList';

export const Home = (props) => {
	return (
		<div>
			<ShoppingCart price={props.price} />
			<ProductList products={props.products} sumPrice={props.sumPrice} />
		</div>
	);
};
