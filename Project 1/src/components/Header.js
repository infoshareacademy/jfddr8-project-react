import { useState } from "react";
import Styles from "../App.css";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";
import { ApiContext } from "./ThemeContext";


export function Naglowek(props) {
  const { theme } = useContext(ThemeContext);
  const { setTheme } = useContext(ApiContext);
  const toggleTheme = (event) => {
    console.log(theme);
    setTheme(!theme);
    event.nativeEvent.stopImmediatePropagation();
  };
  return (
    <div className="wrappertop">
      <img style={{ height: "100px" }} src={props.logoSrc} />
      <h1>{props.title}</h1>
      <button className="theme" onClickCapture={toggleTheme}>
        zmień motyw
      </button>
    </div>
  );
}
