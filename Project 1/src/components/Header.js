import { StyledHeader } from "./Header.style";
import { Button } from "./Button";

export function Header(props) {
  return (
    <StyledHeader>
      <div>{props.title}</div>
      <div>
        <img src={props.logoSrc} />
      </div>
      <div>
        <Button />
      </div>
    </StyledHeader>
  );
}
