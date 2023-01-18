import { HeaderContent } from "./Header.style";

export function Header(props) {
 

  return (
    <>
      <HeaderContent>
      <div>
       <h1>{props.title}</h1> 
        <img className='piesek' src={props.logoSRC}></img>
        </div>
      </HeaderContent>
    </>
  );
}
