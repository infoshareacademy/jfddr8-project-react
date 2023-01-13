import { User } from "./User";
export function Users(props) {
  return (
    <div>
      {props.users.map((element) => (
        <User name={element.name} email={element.email} />
      ))}
    </div>
  );
}

