import React, { Component } from 'react'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import './dashboard_style.css'
import RoutesLogin from "../RoutesLogin";

export default class Dashboard extends Component {
  render() {
    return (
      <div className='posision'>
        <Navbar/>
        <RoutesLogin/>
        <Footer/>
      </div>
    )
  }
}
