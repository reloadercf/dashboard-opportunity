import React, { Component } from 'react';
import './App.css'
//import Homepage from "./logout/components/homepage/Homepage";
//import Login from "./logout/components/login/Login";
import Dashboard from "./login/dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div>
      {/* <Homepage/> */}
        {/* <Login/> */}
        <Dashboard/>
      </div>
    );
  }
}

export default App;
