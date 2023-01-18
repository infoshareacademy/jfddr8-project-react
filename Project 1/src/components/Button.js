import { useState } from "react";
import { StyledButton } from "./Button.style";

export function Button() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const changeMode = () => {
    setIsDarkMode(!isDarkMode);}  
    // console.log(isDarkMode)
    return (<StyledButton onClick={changeMode}>{isDarkMode ? "Light" :  "Dark"} </StyledButton>);
  
  }
