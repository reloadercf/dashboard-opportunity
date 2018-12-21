import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'


class RoutesLogin extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/"  render={props =>(<Main {...props}  />)}/>
            </Switch>
        );
    }
}

export default RoutesLogin;