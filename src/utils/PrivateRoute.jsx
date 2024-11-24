import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { contextData } from '../services/Context' 
import { loginPath } from './Constants'

function PrivateRoute({ children }) {
    const { user } = useContext(contextData)


    if (!user)
    {
        return <Navigate to={loginPath} />
    }
     if ( user != undefined || user != null ) {
        // not logged in so redirect to login page with the return url
        // return <Navigate to={login} />
        return children;

    }
    else
    {
        return <Navigate to={loginPath} />
    }


}

export default PrivateRoute