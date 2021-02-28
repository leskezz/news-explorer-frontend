import React from 'react';
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute ({ component: Component, ...props }) {
    
    function handleRedirect() {
        props.openAuthPopup();
        return <Redirect exact to="/" />
    }

    return (
        <Route path={props.path}>
            {() => props.loggedIn ? <Component {...props} /> 
            : handleRedirect()
            }
        </Route>
    )
};

export default ProtectedRoute;