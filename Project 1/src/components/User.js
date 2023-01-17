import DeleteButton from "../App.js";

export function User(props) {
  return (
    <>
      <li className="personData">
        Name: {props.name}, Email: {props.email}
        <button onClick={() => props.handleDelete(props.id)}>Delete</button>
      </li>
    </>
  );
}
