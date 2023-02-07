import { ShoppingCart } from './ShoppingCart';
import { ProductList } from './ProductList';
import { CartProduct } from './CartProduct';
import { useState } from 'react';

export const Home: React.FC<{
	products: any;
	addProduct: (param: any) => void;
}> = (props) => {

	const [isShoppingActive, setIsShoppingActive] = useState(false)

	return (
		<div>
			<ShoppingCart price={props.products} />
			<button onClick={() => setIsShoppingActive(!isShoppingActive)}>Show products</button>
			{isShoppingActive ? <CartProduct /> : <ProductList products={props.products} addProduct={props.addProduct} />}
		</div>
	);
};
