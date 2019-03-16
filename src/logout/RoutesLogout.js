import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Homepage from './components/homepage/Homepage';
import Login from '../logout/components/login/Login'
import Detail  from './components/CardDetail/Detail';
import  '../logout/components/CardDetail/cardDetail.css'
import { Capacitacion } from './Capacitacion/Capacitacion';
import { Consultoria } from './Consultoria/Consultoria';

class RoutesLogout extends Component {

   
    render() {
        return (
                <Switch>
                    <Route  exact path="/"  render={props =>(<Homepage {...props}  aumentar={this.props.aumentar} />)}/>
                    <Route  path="/detail/:slug_noticia" render={props =>(<Detail {...props}  />)}/>    
                    <Route  path="/entrar" render={props =>(<Login {...props} />)}/>
                    <Route  path="/oportunidades" render={props =>(<Capacitacion  />)}/>
                    <Route  path="/consultoria" render={props =>(<Consultoria  />)}/>
                </Switch>
              
        );
    }

}

export default RoutesLogout;