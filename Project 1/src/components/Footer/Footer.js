import { Button } from "../Button/Button";
import { StyledFooter } from "./Footer.style";

function Footer(props) {
  return (
    <>
      <StyledFooter>{props.text} <Button/></StyledFooter>
    </>
  );
}

export default Footer;