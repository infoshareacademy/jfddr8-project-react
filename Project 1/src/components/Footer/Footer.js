import { StyledFooter } from "./Footer.style";

export const Footer = ({ text, isDarkMode }) => {
  return <StyledFooter isDarkMode={isDarkMode}>{text}</StyledFooter>;
};
