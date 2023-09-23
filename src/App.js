import React from 'react';
import { Header } from './components/ui/Header';
// import { Carousel } from './components/ui/Carousel';
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from "react-router-dom";
import { OrdersView } from './components/orders/OrdersView';
import { ProfileView } from './components/profile/ProfileView';
import { ProductView } from './components/products/ProductView';
import { ProductNew } from './components/products/ProductNew';
import { Login } from './components/auth/Login';
import { Logout } from './components/auth/Logout';
import { Register } from './components/auth/Register';
import PrivateRoute from './components/shared/PrivateRoute';
import PublicRoute from './components/shared/PublicRoute';
import AuthContextProvider from './contexts/authContext';


const App = () => {

    const location = useLocation();

    return (
        <AuthContextProvider>
            <Router>
                <Switch>
                    <Route exact path='/' component={ProductView} />
                    <Route exact path='/productos' component={ProductView} />
                    {/* <Route exact path='/' component={ProductNew} /> */}
                    {/* <PrivateRoute path='/productos' component={ProductNew} />
                    <PrivateRoute path='/logout' component={Logout} />
                    <Route exact path='/orders' component={OrdersView} />
                    <Route exact path='/profile' component={ProfileView} />
                    <PublicRoute exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} /> */}
                    <Redirect to='/' />
                </Switch>
            </Router>
        </AuthContextProvider>
    );
}

export {
    App
}