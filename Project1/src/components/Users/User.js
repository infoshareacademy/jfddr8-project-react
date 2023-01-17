export function User(props) {
	return (
		<div>
			<p>
				{props.name} {props.email}
			</p>
			<button onClick={() => props.handleDelete(props.id)}>Delete</button>
		</div>
	);
}
