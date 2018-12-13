import React, { Component } from 'react';
import Header from "./header/Header";
import Nav from "./nav/Nav"
import Revista from "./revista/Revista"
import Footer from "./footer/Footer"

class Homepage extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Nav/>
          <Revista/>
          <Footer/>
      </div>
    );
  }
}

export default Homepage;
