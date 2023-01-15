import { useState } from "react";
import styled from 'styled-components';

export const ButtonStyle = styled.button`
`;

export function Button () {
    const [colorTheme, setTheme] = useState(true)
    const changeTheme = () => {
        setTheme(!colorTheme);
        colorTheme === false ? (document.body.classList.remove("darkTheme"), document.body.classList.add("lightTheme")) : (document.body.classList.remove("lightTheme"), document.body.classList.add("darkTheme"))
    }
    return (
       <div>
            <p>Changed color theme: {colorTheme}</p>
            <ButtonStyle onClick={changeTheme}>Dark theme/Light theme</ButtonStyle>
       </div> 
    )
}
