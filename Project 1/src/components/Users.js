import { UsersData } from "../data/users-data";

export function List() {
  return (
    <div>
      {UsersData.map((record) => {
        return (
          <div className="box">
            <span>
              {record.name}
              &nbsp;&nbsp;&nbsp;&nbsp;email:&nbsp;&nbsp;&nbsp;&nbsp;
              {record.email}
            </span>
          </div>
        );
      })}
    </div>
  );
}
