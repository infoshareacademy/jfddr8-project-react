import { StyledUser } from "./User.style";

export const User = ({ user, isDarkMode, handleDelete }) => {
  return (
    <StyledUser isDarkMode={isDarkMode}>
      {user.name} - {user.email}
      <button onClick={() => handleDelete(user.id)}>Delete</button>
    </StyledUser>
  );
};
