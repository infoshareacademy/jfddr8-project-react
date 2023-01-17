import { User } from "./User";

export function Users(props) {


  
  return (
    <div>
      <input onChange={(e)=>props.handleSearch(e.target.value)} placeholder="username"/>
      {props.users.map((element) => (
        <User name={element.name} email={element.email} id={element.id} handleDelete={props.handleDelete}/>
      ))}
     
    </div>
  );
}

