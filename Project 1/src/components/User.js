export function User(props) {

    return (
        <div>
            {props.name} {props.email}
        <button onClick={() => props.handleDelete(props.id)}>Delete</button>
        </div>
    )
}