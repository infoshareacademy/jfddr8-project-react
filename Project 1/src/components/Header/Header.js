import { HeaderContent } from "./Header.style";

export function Header(props) {
 

  return (
    <>
      <HeaderContent>
        <div>{props.title}</div>
        <div><img className='logo' src={props.logoSrc}></img></div>

      </HeaderContent>
    </>
  );
}


// import { Button } from "./Button";

// export function Header(props) {
  
//     return (
//       <header className="app-header">
//         <div>{props.title}</div>
//         <div><img src={props.logoSrc}/></div>
//         <div><Button/></div>
//       </header>
//     );
//   }
