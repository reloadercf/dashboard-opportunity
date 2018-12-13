import React from 'react'
import principal from '../statics/images/header/header.jpg'
import './header_style.css'



export default () => {
  return (
        <div>
          <div class="header contenedor">
            <img src={principal} className="principal" alt="principal" />
          </div>
        </div>
  )
}
