import React from 'react'
import Logo from '../../../assets/images/logotipos/mxopportunity.jpg'
import './navbar_estilo.css'
import { Button } from 'antd';
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div>
      <div className="header">
        <div className="header-link-img" >
          <Link to='/'><img src={Logo} alt='mxopportunity' /></Link>
          <Button type="dashed">Cerrar sesion</Button>
        </div>
      </div>
    </div>
  )
}
