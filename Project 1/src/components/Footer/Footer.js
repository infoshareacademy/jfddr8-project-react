import  Button  from "../Button/Button";
import { StyledFooter } from "./Footer.style";

function Footer(props) {
  return (
    <>
      <StyledFooter>{props.text}</StyledFooter>
    </>
  );
}

export default Footer;


