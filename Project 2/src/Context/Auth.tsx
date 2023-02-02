import React from "react";
type AuthContextType = {
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void; //jak funkcja nic nie zwraca
};

const Auth = React.createContext({} as AuthContextType);

export default Auth;