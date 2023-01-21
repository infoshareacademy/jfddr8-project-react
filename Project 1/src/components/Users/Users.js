import { User } from "./User";

export const Users = ({ users, handleDelete, handleSearch, isDarkMode }) => {
  return (
    <div>
      <input placeholder="Search by user name" onChange={event => handleSearch(event.target.value)} />
      <h2>Users list:</h2>
      {users.length < 1 ? (
        <h2>Users list empty!</h2>
      ) : (
      <div>
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            isDarkMode={isDarkMode}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      )}
    </div>
  );
};
