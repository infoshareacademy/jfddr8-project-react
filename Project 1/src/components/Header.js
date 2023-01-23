import { useState } from "react";
import Styles from "../App.css";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";
export function Naglowek(props) {
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <div className="wrappertop">
      <img style={{ height: "100px" }} src={props.logoSrc} />
      <h1>{props.title}</h1>
      <button onClick={toggleTheme} className="theme">zmień motyw</button>
    </div>
  );
}
