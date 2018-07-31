import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Storefront from './components/Storefront/Storefront';
import Cart from './components/Cart/Cart';
import Accountpage from './components/Accountpage/Accountpage';

export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/storefront' component={Storefront} />
        <Route path='/cart' component={Cart} />
        <Route path='/accountpage' component={Accountpage} />
    </Switch>
)