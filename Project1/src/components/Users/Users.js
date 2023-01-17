import { User } from './User';

export function Users(props) {
	return (
		<div>
			<input
				type='text'
				onChange={(event) => props.handleSearch(event.target.value)}
			/>
			{props.users.map((element) => (
				<User
					handleDelete={props.handleDelete}
					name={element.name}
					email={element.email}
					id={element.id}
				/>
			))}
      {(!User) && <p>Users list empty!</p> }
		</div>
	);
}
