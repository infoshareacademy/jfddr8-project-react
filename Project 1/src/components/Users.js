import { User } from "./User";
import App from "../App.js";

export function Users(props) {
  return (
    <div>
      {props.users.map((person) => (
        <User name={person.name} email={person.email} />
      ))}
    </div>
  );
}
