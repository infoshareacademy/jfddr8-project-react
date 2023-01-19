import { User } from "./User";

export function Users(props) {
  return (
    <div>
      <input onChange={(e)=>props.handleSearch(e.target.value)} placeholder="username"/>
      {props.users.map((a) => (
        <User key={a.id} name={a.name} email={a.email} id={a.id} handleDelete={props.handleDelete}/>
      ))}    
    </div>
  );
}

// import '../App.css';
// import { User } from './User';


// export function Users(props) {
//   return (
//     <div className="content">
//       <input onChange={(e)=>props.handleSearch(e.target.value)} placeholder='username'></input>
//       {props.usersList.map((userList) => (
//         <User key={userList.name} name={userList.name} email={userList.email} id={userList.id} handleDelete={props.handleDelete}/>
//       ))}
//     </div>
//   );
// }
