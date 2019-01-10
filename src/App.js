import React, { Component } from 'react';
import './App.css'
import RoutesLogout from './logout/RoutesLogout';
import Dashboard from "./login/dashboard/Dashboard";
const login=false

class App extends Component {
  constructor(){
    super()
    this.state={
     
  }
  
  }
  render() {
    return (
      <div>
        {
          login? 
          <div>
            <Dashboard/>
          </div>:
          <RoutesLogout  aumentar={this.props.aumentar} noticias={this.state.noticias}/>
        }
      </div>
    );
  }
}


export default App