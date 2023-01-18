import { Button } from "./Button";

function Header(props) {
  return (
    <div className="head">
      <img src={props.logoSrc} />
      <h1>{props.title}</h1>
      <Button></Button>
    </div>
  );
}
export default Header;
