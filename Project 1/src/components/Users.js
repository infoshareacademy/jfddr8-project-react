//- utwórz komponent `Users` oraz `User`, który wyświetli listę uzytkowników (nazwę oraz email)
//z pliku `users-data.js` z folderu `src/data` poprzez zaimportowanie jej w głównym komponencie aplikacji (`App`)
//i przekazanie do komponentu `Users`. Lista ma się wyświetlać wewnątrz `Content`.
import {User} from "./User"

export function Users(props) {
    return (
        <div className="users">
          {props.users.map((singleItem) => (
          <User key={singleItem.id} name={singleItem.name} email={singleItem.email}/>))}
        </div> 
      );
}