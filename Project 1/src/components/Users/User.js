export function User (props) {

    return(
        <div className="deleteButton">
            
            <>{props.name} {props.email} </>
            <button onClick={() => props.handleDelete(props.id)}> Usuń mnie </button>
        </div>
    )
}

// export function User (props) {

//     return(
//         <div className="deleteButton">
//             <>{props.name} {props.email}</>
//             <button onClick={() => props.handleDelete(props.id)}>Delete user</button>
//         </div>
        
//     )
// }
