import { User } from './User';

export function Users(props) {
  return (
    <div className="content">
      {props.usersList.map((userList) => (
        <User name={userList.name} email={userList.email}/>
      ))}
    </div>
  );
}