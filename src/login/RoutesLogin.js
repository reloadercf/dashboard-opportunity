import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Dashboard from './dashboard/Dashboard';


class RoutesLogin extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/"  render={props =>(<Dashboard {...props}  />)}/>
            </Switch>
        );
    }
}

export default RoutesLogin;