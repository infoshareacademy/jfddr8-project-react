import { User } from "./User";

export function Users(props) {


  
  return (
    <div>
      
      {props.users.map((element) => (
        <User name={element.name} email={element.email} id={element.id} handleDelete={props.handleDelete}/>
      ))}
     
    </div>
  );
}

