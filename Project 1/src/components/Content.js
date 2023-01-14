import App from "../App.js";
import { Users } from "./Users";
import { User } from "./User";
import { UsersData } from "../data/users-data.js";

function Content(props) {
  return (
    <div>
      <h2>Użytkownicy:</h2>
      <div>{props.children}</div>
    </div>
  );
}

export default Content;
