import { createContext, useState } from "react";
export const contextData = createContext()

export const Context_provider = ({ children }) => {

    const [sidebr, setSidebar] = useState(false)
    const toggleSidebar = () => {

        setSidebar(!sidebr)
    }



    return (
        <contextData.Provider value={{
            toggleSidebar,

            sidebr,
        }}>

            {children}
        </contextData.Provider>
    )

}