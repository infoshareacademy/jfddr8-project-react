import { StyledContent } from "./Content.style";

export const Content = ({ children, isDarkMode }) => {
  return <StyledContent isDarkMode={isDarkMode}>{children}</StyledContent>;
};
