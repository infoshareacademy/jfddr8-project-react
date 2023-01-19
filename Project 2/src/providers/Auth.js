import { useState } from "react";
import { useContext } from "react";

function Auth() {
    const defaultValue ={isLogged: false,}
    const MyUserContext = React.createContext defaultValue

  const [isLogged, setIsLogged] = useState({});
  // useeffect , który sprawdza z localstorage czy jest zalogowany i zmienia isLogged
  // kontekst podpiąć app.js na samej górze lub nawet w index.js - provider contextu
  
  return (
    <MyUserContext.Provider value={{ isLogged }}>
      <App></App>
    </MyUserContext.Provider>
  );
}
export default Auth;
