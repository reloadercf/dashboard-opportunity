import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Dashboard from './dashboard/Dashboard';
import Redactar from "./dashboard/main/layouts/redactar/Redactar";

class RoutesLogin extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/"  render={props =>(<Dashboard {...props}  />)}/>
                <Route exact path="/redactar"  render={props =>(<Redactar{...props}  />)}/>
            </Switch>
        );
    }
}

export default RoutesLogin;