//- utwórz komponent `Users` oraz `User`, który wyświetli listę uzytkowników (nazwę oraz email)
//z pliku `users-data.js` z folderu `src/data` poprzez zaimportowanie jej w głównym komponencie aplikacji (`App`)
//i przekazanie do komponentu `Users`. Lista ma się wyświetlać wewnątrz `Content`.
import { User } from "./User";

export function Users(props) {
  return (
    <>
    <input type="text" onChange={}></input>
    <div className="users">
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
