import '../App.css';
import { User } from './User';


export function Users(props) {
  return (
    <div className="content">
      {props.usersList.map((userList) => (
        <User key={userList.name} name={userList.name} email={userList.email}/>
      ))}
    </div>
  );
}