import { StyledHeader } from "./Header.style";
export function Header({ title, logoSrc }) {
    return (
      <StyledHeader>
      
        <div>{title}</div>
        <img src={logoSrc} />
      
      </StyledHeader>
    );
  }