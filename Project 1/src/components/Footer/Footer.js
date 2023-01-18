import { StyledFooter } from "./Footer.style";

function Footer(props) {
  return (
    <>
      <StyledFooter>
        {props.text}
        {props.children}
      </StyledFooter>
    </>
  );
}

export default Footer;
