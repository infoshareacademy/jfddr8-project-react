import { HeaderContent } from "./Header.style";

export function Header(props) {
  return (
    <>
      <HeaderContent>
        {props.title}
        <img className='piesek' src={props.logoSRC}></img>

      </HeaderContent>
    </>
  );
}
