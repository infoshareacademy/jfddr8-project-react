import { createContext, useState } from "react";
import { useEffect } from "react";

type ContextType = {
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void;
}

type ProviderProps = {
  children: React.ReactNode
}

export const AuthContext = createContext({} as ContextType);

export const AuthProvider = ({ children }: ProviderProps): JSX.Element => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setIsLogged(true);
    }
  }, [])

  return (
    <AuthContext.Provider value={{isLogged, setIsLogged}}>
      {children}
    </AuthContext.Provider>
  );
};