import { HeaderContent } from "./Header.style";

export function Header(props) {
  return (
    <>
      <HeaderContent>
        {props.title}
        <img className="logo" src={props.logoSRC}></img>
      </HeaderContent>
    </>
  );
}
