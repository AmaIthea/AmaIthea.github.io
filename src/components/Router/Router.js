import React, {useContext} from 'react';
import {Context} from './../../context';
import { Route, Switch, Redirect } from 'react-router-dom'

import {MY_PROFILE_ROUTE} from '../../utils/consts/router'
import {START_ROUTE} from '../../utils/consts/router'


import { privateRoutes , publicRoutes }  from './../../utils/routes/routes'






const Router = () =>{

    const { entitledCheck } = useContext(Context);

    return entitledCheck() ? (
        <Switch>
            {privateRoutes.map(({path, Component}) =>
            <Route path={path} component={Component} exact={true}/>
            )}
            
            <Redirect to={MY_PROFILE_ROUTE}/>
        </Switch>    
    ) 
    : 
    (
        <Switch>
            {publicRoutes.map(({path, Component}) =>
            <Route path={path} component={Component} exact={true}/>
            )}

            <Redirect to={START_ROUTE}/>
        </Switch>
    )
}

export default Router