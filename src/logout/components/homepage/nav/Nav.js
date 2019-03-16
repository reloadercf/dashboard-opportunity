import React, { Component } from 'react';
import './style.css';
import { Icon,Popover } from 'antd';

const content = (
  <div>
    <p>¿Quieres tener tu propio Articulo?<a href='mailto:contacto@planb.com.mx?Subject=Quiero estar en la app MXOpportunity'>Haz Clic</a></p>
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
      </div>
  
      <div id="menuitems"  style={{display: !this.state.open ?"block":"none"}} >
      
      </div>
    </nav> 
      
    );
  }
}

export default Nav;