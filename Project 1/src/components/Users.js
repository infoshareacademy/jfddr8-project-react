import React from "react";
import { Item } from "./User";

export function List(props) {
  const data = props.data;
  console.log(data);
  return (
    <div className="container">
      {data.map((record) => {
        return <Item name={record.name} email={record.email} key={record.id} />;
      })}
    </div>
  );
}
