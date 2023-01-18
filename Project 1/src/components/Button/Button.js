import { ButtonStyled } from "./Button.style";
function Button({theme,setTheme}) { 
  
    const changeColor = () => {
        setTheme(!theme)    
    }

    return <ButtonStyled onClick={changeColor}>Light / Dark</ButtonStyled>
    
}

export default Button


// import { useState } from "react";
// import styled from 'styled-components';

// export const ButtonStyle = styled.button`
// `;

// export function Button ({theme, SetTheme}) {
//     const changeColor = () => {
//         SetTheme(!theme);   
//     }
//     return (
//        <div>
//             <p>Changed color theme: </p>
//             <ButtonStyle onClick={changeColor}>Dark theme/Light theme</ButtonStyle>
//        </div> 
//     )
// }
