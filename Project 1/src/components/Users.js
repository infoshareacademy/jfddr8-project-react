import { User } from "./User";
import App from "../App.js";

export function Users(props) {
  return (
    <>
      <input onChange={(e) => props.handleSearch(e.target.value)}></input>
      <ul>
        {props.users.map((person) => (
          <User
            key={person.id}
            user={person}
            name={person.name}
            email={person.email}
            id={person.id}
            handleDelete={props.handleDelete}
          />
        ))}
      </ul>
    </>
  );
}
