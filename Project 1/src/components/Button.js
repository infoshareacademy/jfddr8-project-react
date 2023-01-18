import { useState } from "react";

export function Button() {
  const [changeColor, setChangeColor] = useState(true);

  const setColor = () => {
    setChangeColor(!changeColor);
    document.body.classList.toggle("darkMode");
  };

  return <button onClick={setColor}>Change color theme</button>;
}
