import Styles from "../App.css";
import { useState } from "react";
import { useEffect } from "react";
var count = 0;

export function Item(props) {
  const name = props.name;
  const email = props.email;
  const [info, setInfo] = useState("name: " + name + " email: " + email);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    return () => {
      if (count === 0) {
        setInfo("Users list empty");
      }
    };
  }, [isActive]);

  useEffect(() => {
    count = count + 1;
    console.log(count);
  }, []);

  function handleDelete() {
    setInfo("");
    setActive((current) => !current);
    count = count - 1;
  }

  return (
    <>
      {info}
      <button
        className="delete"
        onClick={() => {
          handleDelete();
          console.log(count);
        }}
        style={{
          display: isActive ? "none" : "block",
        }}
      >
        delete
      </button>
    </>
  );
}
