import { ButtonStyled } from "./Button.style";
function Button({ theme, setTheme }) {
  const changeColor = () => {
    setTheme(!theme);
  };

  return <ButtonStyled onClick={changeColor}>Change color theme</ButtonStyled>;
}

export default Button;
