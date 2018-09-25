import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Storefront from './components/Storefront/Storefront';
import Cart from './components/Cart/Cart';
import Accountpage from './components/Accountpage/Accountpage';
import Thankyou from './components/Thankyoupage/Thankyoupage';
import Communitypage from './components/Communitypage/Communitypage';
import Exercise from './components/Exercise/Exercise';
import Protein from './components/Storefront/Protein/Protein';
import Preworkout from './components/Storefront/Preworkout/Preworkout';
import Multivitamins from './components/Storefront/Multivitamins/Multivitamins';
import Bcaa from './components/Storefront/Bcaa/Bcaa';
import Creatine from './components/Storefront/Creatine/Creatine';
import Accessories from './components/Storefront/Accessories/Accessories';

export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/storefront' component={Storefront} />
        <Route path='/cart' component={Cart} />
        <Route path='/accountpage' component={Accountpage} />
        <Route path='/thankyou' component={Thankyou} />
        <Route path='/community' component={Communitypage} />
        <Route path='/exercise' component={Exercise} />
        <Route path='/protein' component={Protein} />
        <Route path='/preworkout' component={Preworkout} />
        <Route path='/multivitamins' component={Multivitamins} />
        <Route path='/bcaa' component={Bcaa} />
        <Route path='/creatine' component={Creatine} />
        <Route path='/accessories' component={Accessories} />
    </Switch>
)