import { useState } from "react";
import { ButtonStyled } from "./Button.style";

export function Button () {
    const [lightDark, setLightDark] = useState(true);
    const changeColor = () => {
        setLightDark(!lightDark);
    
    }




    return <ButtonStyled onClick={changeColor}>Light Mode / Dark Mode</ButtonStyled>
    
}

