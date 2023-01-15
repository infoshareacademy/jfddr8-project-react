import { useState } from "react";

export function Button () {
    const [theme, setTheme] = useState("light theme")
    return (
       <div>
            <p>Changed theme: {theme}</p>
            <button onClick={() => {
            if(theme === "lightTheme") {
                setTheme("darkTheme");
            } else {
                setTheme("lightTheme");
            }
        }}>dark theme/light theme</button>
       </div> 
    )
}
