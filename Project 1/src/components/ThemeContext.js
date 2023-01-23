import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function Provider({ children }) {
  const [theme, setTheme] = useState(true);

  const toggleTheme = (event) => {
    console.log(theme);
    event.stopPropagation();
    setTheme(!theme)
  };
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
