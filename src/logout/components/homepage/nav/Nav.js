import React, { Component } from 'react';
import './style.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade'; 
import { Icon,Popover } from 'antd';

const content = (
  <div>
    <p>¿Quieres tener tu propio Articulo?<a href='mailto:contacto@planb.com.mx?Subject=Quiero estar en la app MXOpportunity'>Haz Cilc</a></p>
  </div>
);

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
      } 
      
      else {
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
      <nav id="navBar" >
      
      <div className="logo">
          <Popover placement="bottomLeft" content={content} trigger="hover">
            <Icon className='icono' type="bulb" style={{ fontSize: '25px'}}/>
          </Popover>
          <span className="menu-icon" onClick={this.toggleMenu} ><FontAwesomeIcon icon={faBars} size="2x" style={{ color: "#fffff", marginRight:".5em" }} /></span>
      </div>
  
      <div id="menuitems"  style={{display: !this.state.open ?"block":"none"}} >
      <Fade top cascade  >
      <ul>       
        <li> <Link to="/capacitacion" replace>Oportunidades</Link></li>
      </ul>    
      </Fade>
      </div>
    </nav> 
      
    );
  }
}

export default Nav;