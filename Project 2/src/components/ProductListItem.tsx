export const ProductListItem: React.FC<{
	thumbnail: string;
	title: string;
	description: string;
	price: number;
	sumPrice: (price: number) => void;
}> = (props) => {
	return (
		<div>
			<img src={props.thumbnail} style={{ width: 80 + 'px' }}></img>
			{props.title} {props.description} {props.price}
			<button onClick={() => props.sumPrice(props.price)}>
				Dodaj do koszyka
			</button>
		</div>
	);
};
