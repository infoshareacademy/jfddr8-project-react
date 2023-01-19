import React from "react";
import { Item } from "./User";

export function List(props) {
  const data = props.data;
  console.log(data);
  return (
    <div>
      {data.map((record) => {
        return (
          <div className="box" key={record.id}>
            <Item name={record.name} email={record.email} />
          </div>
        );
      })}
    </div>
  );
}
