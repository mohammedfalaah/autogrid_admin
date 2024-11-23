import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { basePath, dashboardPath } from "./Constants";

export {PublicRoute} ;
function PublicRoute({ children }) {
    const [user] = useState (localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')):'' )

    if (user !== null && user.role !== undefined){
        return <Navigate to={dashboardPath} />
    }
    return children
}