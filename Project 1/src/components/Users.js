import { User } from "./User";
import App from "../App.js";

export function Users(props) {
  return (
    <ul>
      {props.users.map((person) => (
        <User
          user={person}
          name={person.name}
          email={person.email}
          id={person.id}
          handleDelete={props.handleDelete}
        />
      ))}
    </ul>
  );
}
