import App from "../App";
import Users from "./Users";

export function Content(props) {
  console.log(props.user);
  return (
    <div className="content">
      <div>
        <Users user={props.user}></Users>
        {/* Przerzucam kod z Users.js  */}
      </div>
      sdjskdjs
    </div>
  );
}
