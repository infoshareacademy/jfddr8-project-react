//## Zadanie 5

// dodaj do komponentu `User` przycisk `Delete` i napisz jego obsługę
// (po jego naciśnięciu z listy ma się usuwać dany User, po odświezeniu strony pojawi się ponownie).
// Jeśli usuniesz wszystkich userów, wyświetl w miejscu listy komunikat - "Users list empty!"
import { useState } from "react"

export function User(props) {

    const NameAndEmail = props.email + " " + props.name
    const [data, setData] = useState(NameAndEmail)
    
    return (
        <div>
            {data}
        <button onClick={() => setData(!data)}>Delete</button>
        </div>
    )
}