import { createContext, useState } from "react";
import {jwtDecode} from "jwt-decode";


export const contextData = createContext()

export const Context_provider = ({ children }) => {
    const [user, setUser] = useState(
        localStorage.getItem("token")
          ? jwtDecode(localStorage.getItem("token"))
          : null
      );
    const [sidebr, setSidebar] = useState(false)
    const toggleSidebar = () => {

        setSidebar(!sidebr)
    }



    return (
        <contextData.Provider value={{
            toggleSidebar,

            sidebr,
            user,
            setUser
        }}>

            {children}
        </contextData.Provider>
    )

}