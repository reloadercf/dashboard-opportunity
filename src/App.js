import React, { Component } from 'react';
import './App.css'
import RoutesLogout from './logout/RoutesLogout';
//import Dashboard from "./login/dashboard/Dashboard";
import {BrowserRouter as Router} from 'react-router-dom' 
import ScrollMemory from 'react-router-scroll-memory';
import {Provider} from 'react-redux'
import store from './Store/Store'

//const login=false


class App extends Component {
  constructor(){
    super()
    this.state={    
  }
  
  }
  render() {
    return (

      <Provider store={store}>
          <Router>
            <div>    
               <ScrollMemory/>
               <RoutesLogout  aumentar={this.props.aumentar} noticias={this.state.noticias}/>          
            </div>
         </Router>
   </Provider>
     
    );
  }
}


export default App