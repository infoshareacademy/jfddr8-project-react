import { StyledFooter } from "./Footer.style";


export function Footer({ text }) {
    return (
      <StyledFooter>
      
        <div>{text}</div>
        
      
      </StyledFooter>
    );
  }