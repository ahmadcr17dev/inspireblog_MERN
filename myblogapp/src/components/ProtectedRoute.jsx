import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const authenticated = localStorage.getItem('token');

    useEffect(() => {
        if (!authenticated) {
            navigate('/login'); // Redirect to login if not authenticated
        }
    }, [authenticated, navigate]); // Only run when `authenticated` or `navigate` changes

    // Render children if authenticated, otherwise nothing
    return authenticated ? children : null;
};

export default ProtectedRoute;