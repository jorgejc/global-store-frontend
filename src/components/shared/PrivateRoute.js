import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Login } from '../auth/Login';
import useAuthContext from '../../hooks/useAuthContext';


const PrivateRoute = (props) => {
    const {isAuthenticated} = useAuthContext();

    if (!isAuthenticated) {
      return <Redirect to={Login} />;
    }

    return <Route {...props} />
};

export default PrivateRoute;