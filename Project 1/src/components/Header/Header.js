import { StyledHeader, StyledH, StyledLogo } from "./Header.style";

export const Header = ({ title, handleSwitchTheme, isDarkMode, logoSrc }) => {
  return (
    <StyledHeader isDarkMode={isDarkMode}>
      <StyledLogo src={logoSrc} />
      <StyledH>{title}</StyledH>
      <button onClick={handleSwitchTheme}>SWITCH THEME</button>
    </StyledHeader>
  );
};
