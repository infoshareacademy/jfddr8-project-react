import React, { createContext, useState, useEffect } from "react";

const LoginContext = createContext();
const LoginContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = window.localStorage.getItem("user");
    debugger;

    if (user !== null && user !== "") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const logIn = (email) => {
    window.localStorage.setItem("user", email);
  };

  const logOut = () => {
    setIsLoggedIn(false);
    window.localStorage.removeItem("user");
  };

  const loginState = {
    isLoggedIn,
    logIn,
    logOut,
  };

  return (
    <LoginContext.Provider value={loginState}>{children}</LoginContext.Provider>
  );
};

export { LoginContext, LoginContextProvider };
