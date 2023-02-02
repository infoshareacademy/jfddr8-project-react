import { createContext, useState } from "react";
import { useEffect } from "react";
type AuthContextType = {
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void
}
type AuthProviderProps = {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: AuthProviderProps) => {
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