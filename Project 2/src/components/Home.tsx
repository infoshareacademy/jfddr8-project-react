import { ShoppingCart } from './ShoppingCart';
import { ProductList } from './ProductList';

export const Home: React.FC<{
	products: any;
	price: number;
	sumPrice: (n: number) => void;
}> = (props) => {
	return (
		<div>
			<ShoppingCart price={props.price} />
			<ProductList products={props.products} sumPrice={props.sumPrice} />
		</div>
	);
};
