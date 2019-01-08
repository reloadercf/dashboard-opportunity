import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Homepage from './components/homepage/Homepage';
import Login from '../logout/components/login/Login'
import { Detail } from './components/CardDetail/Detail';
import  '../logout/components/CardDetail/cardDetail.css'
import { Capacitacion } from './Capacitacion/Capacitacion';
import { Consultoria } from './Consultoria/Consultoria';

class RoutesLogout extends Component {

    componentDidMount(){
        window.onscroll = function() {myFunction()};
        function myFunction() {
          if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("navBar").className = "";
          } else {
            document.getElementById("navBar").className = "black";
          }
        }
        
       }
    render() {
        let{noticias}=this.props       

        return (
            <Switch>
                <Route exact path="/"  render={props =>(<Homepage {...props}  aumentar={this.props.aumentar} />)}/>
                <Route exact path="/detail/:slug_noticia" render={props =>(<Detail {...props} noticias={noticias}  />)}/>    
                <Route exact path="/entrar" render={props =>(<Login {...props} />)}/>
                <Route exact path="/capacitacion" render={props =>(<Capacitacion  />)}/>
                <Route exact path="/consultoria" render={props =>(<Consultoria  />)}/>
                
            </Switch>
        );
    }

}

export default RoutesLogout;