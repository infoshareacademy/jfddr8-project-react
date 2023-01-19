import { useContext, useState } from "react";
import { createContext } from "react";
import App from "../App";

function Auth() {
    const defaultValue = {user:false}
    const MyUserContext = React.createContext(defaultValue)

    const [isLogged, setIsLogged] = useState({});

    return (
        <MyUserContext.Provider value={{isLogged}}>
            <App></App>
        </MyUserContext.Provider>
            

    );
}