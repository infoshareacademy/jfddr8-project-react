//Jeśli usuniesz wszystkich userów, wyświetl w miejscu listy komunikat - “Users list empty!”

import { User } from "./User";
import { useEffect } from "react";

export function Users(props) {
    return (
      <div className="users">
        {props.users.map((singleItem) => (
          <User
            key={singleItem.id}
            name={singleItem.name}
            email={singleItem.email}
          />
        ))}
      </div>
    );
  }
