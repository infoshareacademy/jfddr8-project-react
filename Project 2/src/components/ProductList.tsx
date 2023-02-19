import { ProductListItem } from './ProductListItem';

export const ProductList: React.FC<{
	products: any;
	addProduct: (param: any) => void;
}> = (props) => {
	return (
		<div>
			<h2>Product List</h2>
			<div>
				{props.products.map((el: any) => (
					<ProductListItem
						key={el.id}
						title={el.title}
						description={el.description}
						price={el.price}
						thumbnail={el.thumbnail}
						addProduct={props.addProduct}
					/>
				))}
			</div>
		</div>
	);
};
