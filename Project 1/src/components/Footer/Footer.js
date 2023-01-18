import  Button  from "../Button/Button";
import { StyledFooter } from "./Footer.style";

function Footer(props) {
  return (
    <>
      <StyledFooter>{props.text}{props.children}</StyledFooter>
    </>
  );
}

export default Footer;


// export function Footer({ text }) {
//     return (
//       <footer className="app-footer">
//         <div>{text}</div>
//       </footer>
//     );
//   }
  