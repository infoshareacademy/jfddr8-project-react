import { createContext, useState } from "react";

export const ApiContext = createContext();
export const ThemeContext = createContext();

export function Provider({ children }) {
  const [theme, setTheme] = useState(true);

  
  return (
    <ThemeContext.Provider value={{theme}}>
      <ApiContext.Provider value={{setTheme}}>
      {children}
      </ApiContext.Provider>
    </ThemeContext.Provider>
  );
}
