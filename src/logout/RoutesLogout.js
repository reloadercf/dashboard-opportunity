import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Homepage from './components/homepage/Homepage';


class RoutesLogout extends Component {
    render() {
        console.log(this.props)
        return (
            <Switch>
                <Route exact path="/"  render={props =>(<Homepage {...props}  aumentar={this.props.aumentar} />)}/>
            </Switch>
        );
    }
}

export default RoutesLogout;