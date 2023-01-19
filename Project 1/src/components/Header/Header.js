import { HeaderContent } from "./Header.style";

export function Header(props) {
  return (
    <>
      <HeaderContent>
        <div>{props.title}</div>
        <div><img className='logo' src={props.logoSrc}></img></div>
        <div>{props.children}</div>
      </HeaderContent>
    </>
  );
}
