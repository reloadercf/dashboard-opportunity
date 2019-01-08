import React from 'react'
import './style.css'
import logo from '../../../../assets/images/logotipos/iconomx.png'

export const Nav = ({props})=> {
  return (
      <nav id="navBar" className="navBar">
            <div className="logo">
              <img src={logo} alt="logo"/>
              <span className="menu-icon" >Ver Menu</span>
            </div>
            
            <ul>
              <li><a href='www.google.com'>¿Quiero ser MXOpportunitty?</a></li>
              <li><a href='www.google.com'>CONSULTORIA</a></li>
              <li><a href='www.google.com'>CAPACITACIÓN</a></li>
            </ul>    
      </nav>  
   
  )
}

