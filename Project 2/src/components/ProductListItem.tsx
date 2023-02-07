export const ProductListItem: React.FC<{
	thumbnail: string;
	title: string;
	description: string;
	price: number;
	id: number;
	addProduct: (param: any) => void;
}> = (props) => {
	return (
		<div>
			<img src={props.thumbnail} style={{ width: 80 + 'px' }}></img>
			{props.title} {props.description} {props.price}
			<button
				onClick={() =>
					props.addProduct({
						title: props.title,
						price: props.price,
						id: props.id,
					})
				}>
				Dodaj do koszyka
			</button>
		</div>
	);
};
