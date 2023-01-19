import { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !password) {
      alert("wpisz login i hasło");
      return;
    } else {
      localStorage.setItem("user", name);
      // tu będziemy zmieniać stan z konekstu- który mówi o zalogowaniu
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="login">login:</label>
      <input
        type="text"
        name="login"
        id="login"
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="password">password:</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Zaloguj</button>
    </form>
  );
}

export default Login;
