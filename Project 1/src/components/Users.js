import React from "react";
import { Item } from "./User";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export function List(props) {
  const [query, setQuery] = useState("");
  const data = props.data;
  const [isVisible, setVisible] = useState(false);
  const itemRef = useRef();
  const listRef = useRef();
  function handleChange(event) {
    setQuery(event.target.value);
    event.nativeEvent.stopImmediatePropagation();
  }
  useEffect(() => {
    const element = listRef.current.innerText;
    console.log(element);
      if (element === "") {
        setVisible(true);
        console.log(element);
      } else if (element === "Users list empty") {
        setVisible(true)
      } else {
        setVisible(false)
      }
  },);

  return (
    <div
      ref={listRef}
      className="container"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <input
        style={{ display: "block" }}
        placeholder="Wyszukaj użytkownika..."
        onChange={handleChange}
      ></input>
      {data
        .filter((post) => {
          if (query === "") {
            return post;
          } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
            console.log(post);
            return post;
          }
        })
        .map((record) => {
          return (
            <Item name={record.name} email={record.email} key={record.id} />
          );
        })}
      <span
        style={{
          display: isVisible ? "block" : "none",
        }}
      >
        Users list empty
      </span>
    </div>
  );
}
