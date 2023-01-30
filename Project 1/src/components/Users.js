import { User } from "./User";

export function Users(props) {
  return (
    <>
    <input type="text" id="browse" onChange={event => props.handleSearch(event.target.value)}></input>
    <div>
      {props.users.length > 0 ? (
        props.users.map((singleItem) => (
          <User
            handleDelete={props.handleDelete}
            id={singleItem.id}
            key={singleItem.id}
            name={singleItem.name}
            email={singleItem.email}
          />
        ))
      ) : (
        <p>Users list empty</p>
      )}
    </div>
    </>
  );
}
