import { Button } from "./Button";

export function Header(props) {
  
    return (
      <header className="app-header">
        <div>{props.title}</div>
        <div><img src={props.logoSrc}/></div>
        <div><Button/></div>
      </header>
    );
  }
