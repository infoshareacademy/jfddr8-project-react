import {User} from "./user.js"


export function Users(props) {
    return (
        <div className="users">
             <input onChange={(e)=>props.handleSearch(e.target.value)} placeholder="username"/>
          {props.users.map((a) => (
          <User key={a.id} name={a.name} email={a.email} id={a.id} handleDelete={props.handleDelete}/>))}
        </div> 
      );
}