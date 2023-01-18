import { useState } from "react";
import { StyledButton } from "./Button.style";

export function Button() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const changeMode = () => {
    setIsDarkMode(!isDarkMode);
    // isDarkMode === true
    //   ? (document.body.classList.remove("dark"),
    //     document.body.classList.add("light"))
    //   : document.body.classList.remove("light"),
    //   document.body.classList.add("dark");
  };

  return (
    <StyledButton onClick={changeMode}>
      {isDarkMode ? "Light" : "Dark"}{" "}
    </StyledButton>
  );
}
