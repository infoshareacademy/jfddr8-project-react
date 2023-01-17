import { useState } from "react";
import { ButtonStyled } from "./Button.style";

export function Button ({toggleTheme}) { 
    const [isToggled,setIsToggled] = useState(true);
    
    const changeColor = () => {
        setIsToggled(!isToggled)
        toggleTheme();
        console.log('tak')
    
    }




    return <ButtonStyled onClick={changeColor}>Light / Dark</ButtonStyled>
    
}

