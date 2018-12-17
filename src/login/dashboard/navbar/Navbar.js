import React from 'react'
import Logo from '../../../assets/images/logotipos/mxopportunity.jpg'
import './navbar_estilo.css'
import { Button } from 'antd';

export default () => {
  return (
    <div>
      <div className="header">
        <div className="header-link-img" >
          <img src={Logo} alt='mxopportunity' />
          <Button type="dashed">Cerrar sesion</Button>
        </div>
      </div>
    </div>
  )
}
