import { createContext, useState } from "react";
import {jwtDecode} from "jwt-decode";


export const contextData = createContext()

export const Context_provider = ({ children }) => {
    const [user, setUser] = useState(
        localStorage.getItem("token")
          ? jwtDecode(localStorage.getItem("token"))
          : null
      );
      const [sidebr, setSidebar] = useState(false);

      const toggleSidebar = () => {
        setSidebar(!sidebr)
    }
    
    const openSidebar = () => {
        setSidebar(false)
    }




    return (
        <contextData.Provider value={{
           
            user,
            setUser,
            sidebr, toggleSidebar, openSidebar,
        }}>

            {children}
        </contextData.Provider>
    )

}