import React, { useEffect, useState } from "react";

export const LoginStatus = React.createContext([]);
function Auth(props) {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    localStorage.getItem("user") && setIsLogged(true);
  }, []);

  return (
    <LoginStatus.Provider value={{ isLogged, setIsLogged }}>
      {props.children}
    </LoginStatus.Provider>
  );
}

export default Auth;