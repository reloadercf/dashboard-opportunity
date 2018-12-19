import React, { Component } from 'react'
import Navbar from './navbar/Navbar'
//import Main from './main/Main'
import Footer from './footer/Footer'
import './dashboard_style.css'
import Redactar from "./main/layouts/redactar/Redactar"
//import Respaldo from "./main/layouts/redactar/Respaldo"
//import Patrocinadores from "./main/layouts/patrocinadores/Patrocinadores";

export default class Dashboard extends Component {
  render() {
    return (
      <div className='posision'>
        <Navbar/>
        {/* <Main/> */}
        <Redactar/>
        {/* <Patrocinadores/> */}
        <Footer/>
      </div>
    )
  }
}
