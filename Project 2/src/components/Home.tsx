import { ShoppingCart } from './ShoppingCart';
import { ProductList } from './ProductList';
import { CartProduct } from './CartProduct';
import { useState } from 'react';

export const Home: React.FC<{
	products: any;
	price: number;
	sumPrice: (n: number) => void;
}> = (props) => {

	const [isShoppingActive, setIsShoppingActive] = useState(false)

	return (
		<div>
			<ShoppingCart price={props.price} />
			<button onClick={() => setIsShoppingActive(!isShoppingActive)}>Show products</button>
			{isShoppingActive ? <CartProduct /> : <ProductList products={props.products} sumPrice={props.sumPrice} />}
		</div>
	);
};
