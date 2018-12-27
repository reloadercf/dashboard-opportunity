import React, { Component } from 'react';
import { Layout} from 'antd';

import Header from "./header/Header";
import {Revista} from "./revista/Revista"
import Footer from "./footer/Footer"
import { Nav } from './nav/Nav';


class Homepage extends Component {
  render() {
    console.log(this.props)
    return (
      <Layout>
          <Header/>
          <Nav/>
          <Revista/>
          <Footer/>
      </Layout>
         
     
    );
  }
}

export default Homepage;
