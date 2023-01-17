import { ButtonStyled } from "./Button.style";
function Button ({theme, SetTheme}) { 
  
    const changeColor = () => {
        SetTheme(!theme)
        console.log('mama')
        
    }

    return <ButtonStyled onClick={changeColor}>Light / Dark</ButtonStyled>
    
}

export default Button

