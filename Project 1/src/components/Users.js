//- utwórz komponent `Users` oraz `User`, który wyświetli listę uzytkowników (nazwę oraz email)
//z pliku `users-data.js` z folderu `src/data` poprzez zaimportowanie jej w głównym komponencie aplikacji (`App`)
//i przekazanie do komponentu `Users`. Lista ma się wyświetlać wewnątrz `Content`.
import { UsersData } from "../data/users-data";

export function Users() {
    return (
        <>
        {UsersData.map((userItem) => (
          <div key={userItem.username}>{singleItem.username}, {userItem.email}</div>
        ))}
        </>
    );
  }

export function User() {
        return (
          <>
            {UsersData.username}, {UsersData.email}
          </>
        );
      }