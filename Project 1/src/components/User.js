import Styles from "../App.css";
import { useState } from "react";
import { useEffect } from "react";
var count = 0;

export function Item(props) {
  const name = props.name;
  const email = props.email;
  const [info, setInfo] = useState("Name: " + name + " Email: " + email);
  const [isActive, setActive] = useState(false);

  function HandleDelete() {
    setInfo("!");
    setActive((current) => !current);
  }

  return (
    <>
      <span style={{display: isActive ? "none" : "block",}}>{info}</span>
      <button
        className="delete"
        onClick={() => {
          HandleDelete();
          console.log(count);
        }}
        style={{
          display: isActive ? "none" : "block",
          width: "100px",
        }}
      >
        delete
      </button>
    </>
  );
}
