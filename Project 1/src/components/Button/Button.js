import { ButtonStyled } from "./Button.style";
function Button ({theme,setTheme}) { 
  
    const changeColor = () => {
        setTheme(!theme)
        
    }

    return <ButtonStyled onClick={changeColor}>Light / Dark</ButtonStyled>
    
}

export default Button

