import { StyledFooter } from "./Footer.style";
import { Button } from "./Button";

export function Footer(props) {
  return (
    <>
      <StyledFooter>
        {props.text}
      </StyledFooter>
    </>
  );
}
