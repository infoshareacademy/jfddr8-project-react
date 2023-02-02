import {handleDelete} from "../../App"
import {Users} from "./Users"

export function User (props) {
    
return(
    <div className="deleteButton">
        <>{props.name} {props.email}
        </>
        <button onClick={() => props.handleDelete(props.id)}>Usuń mnie</button>
    </div>
)
}

