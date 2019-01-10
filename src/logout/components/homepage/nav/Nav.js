import React, { Component } from 'react';
import './style.css'
import {Link} from 'react-router-dom'
import logo from '../../../../assets/images/logotipos/iconomx.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade'; 

class Nav extends Component {
  constructor(){
    super()
    this.state={
        open:false
    }
  }
 
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

   toggleMenu = () => {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <nav id="navBar" className="navBar">
      <div className="logo">
        <img src={logo} alt="logo"/>
        <span className="menu-icon" onClick={this.toggleMenu} ><FontAwesomeIcon icon={faBars} size="2x" style={{ color: "#fffff", marginRight:".5em" }} /></span>
      </div>

      <div  style={{display: !this.state.open ?"block":"none"}}>
      <Fade top cascade  >
      <ul>       
        <li> <Link to="/" replace>¿Quiero ser MXOpportunitty?</Link></li>
        <li> <Link to="/consultoria" replace>CONSULTORIA</Link></li>
        <li> <Link to="/capacitacion" replace>CAPACITACIÓN</Link></li>
      </ul>    
      </Fade>
      </div>
    </nav> 
      
    );
  }
}

export default Nav;