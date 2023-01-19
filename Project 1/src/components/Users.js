import { User } from "./User"

export function Users(props) {
    return (
        <div className="users">
            {props.users.map((singleItem) => (
                <User name={singleItem.name} email={singleItem.email}/>
            ))}
        </div>
    );
}