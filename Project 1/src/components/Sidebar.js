import App from "../App";
import Styles from "../App.css"

export function Sidebar(props) {
  const data = props.menuItems;
  console.log(data);
  return (
    <div>
      {data.map((record) => {
        return (
          <>
            <div className="name">{record.name}&nbsp;&nbsp;:</div>
            <div className="link">{record.link}</div>
          </>
        );
      })}
    </div>
  );
}
