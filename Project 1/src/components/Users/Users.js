import { User } from "./User";

export function Users(props) {
  return (
    <div>
      <input
        onChange={(e) => props.handleSearch(e.target.value)}
        placeholder="search username"
      />
      {props.users.map((a) => (
        <User
          key={a.id}
          name={a.name}
          email={a.email}
          id={a.id}
          handleDelete={props.handleDelete}
        />
      ))}
    </div>
  );
}
