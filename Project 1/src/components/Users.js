function Users(props) {
  console.log(props.user);
  const DeleteUser = (user) => {
    console.log("click");
    props.user.slice(user, 1);
  };
  return (
    <>
      {props.user.map((user, index) => {
        return (
          <div className="user">
            <p>Imie: {user.name}</p>
            <p>Email: {user.email}</p>
            <button onClick={DeleteUser(index)}>DELETE</button>
          </div>
        );
      })}
    </>
  );
}

export default Users;
