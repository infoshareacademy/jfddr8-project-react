export function User(props) {
  return (
    <ul>
      {" "}
      <li>
        Name: {props.name}, Email: {props.email}
      </li>
    </ul>
  );
}
