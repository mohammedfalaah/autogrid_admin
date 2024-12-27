import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { contextData } from '../services/Context';
import { loginPath } from './Constants';

export { PrivateRoute };

function PrivateRoute({ children }) {
    const { user } = useContext(contextData);

    // Ensure user is authenticated
    if (!user) {
        // Optionally, clear localStorage/sessionStorage to prevent unauthorized access
        localStorage.removeItem('token'); // Example, based on your auth implementation
        return <Navigate to={loginPath} />;
    }

    return children;
}

export default PrivateRoute;
