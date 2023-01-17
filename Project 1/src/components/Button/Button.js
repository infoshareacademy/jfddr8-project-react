import { useState } from "react";
import { ButtonStyled } from "./Button.style";

export function Button () {
    const [lightDark, setLightDark] = useState(true);
    const changeColor = () => {
        setLightDark(!lightDark);
        // lightDark === true ? (document.body.classList.remove('dark'), document.body.classList.add('light')) : document.body.classList.remove('light'), document.body.classList.add('dark');
    }

    return <ButtonStyled onClick={changeColor}>Light Mode / Dark Mode</ButtonStyled>

}
    

