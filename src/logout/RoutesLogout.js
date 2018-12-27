import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Homepage from './components/homepage/Homepage';
import Login from '../logout/components/login/Login'

class RoutesLogout extends Component {
    render() {
        console.log(this.props)
        return (
            <Switch>
                <Route exact path="/"  render={props =>(<Homepage {...props}  aumentar={this.props.aumentar} />)}/>
                <Route exact path="/entrar" render={props =>(<Login {...props} />)}/>
            </Switch>
        );
    }
}

export default RoutesLogout;