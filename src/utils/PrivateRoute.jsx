import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { loginPath } from "./Constants";




export { PrivateRoute };
function PrivateRoute ({ children }){
    const [user] = useState(localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')) : '')
    if (user === null) {
        return <Navigate to={loginPath} />
    }
    if (user.role != undefined || user.role != null){
        return children
    } else {
        return <Navigate to={loginPath} />
    }
}