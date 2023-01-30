import React, { useEffect, useState } from "react";

type LoginStatusType = {
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void;
};

type PropsWithChildren = {
  children: JSX.Element;
};

export const LoginStatus = React.createContext<LoginStatusType>({} as LoginStatusType);
const Auth = (props:PropsWithChildren): JSX.Element => {
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
