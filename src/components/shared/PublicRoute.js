import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ProductNew } from '../products/ProductNew';
import useAuthContext from '../../hooks/useAuthContext';

const PublicRoute = (props) => {
    const {isAuthenticated} = useAuthContext();

    if (isAuthenticated) {
      return <Redirect to={ProductNew} />;
    }

    return <Route {...props} />
};

export default PublicRoute;