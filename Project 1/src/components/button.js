import { ButtonStyled } from "./button.style.js";
 export function Button ({theme,setTheme}) { 
  
    const changeColor = () => {
        setTheme(!theme)
        
    }

    return <ButtonStyled onClick={changeColor}>Light / Dark</ButtonStyled>
    
}


