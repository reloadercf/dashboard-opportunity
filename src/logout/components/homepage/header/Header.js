import React from 'react'
import android from '../../../../assets/images/header/google.png'
import ios from '../../../../assets/images/header/apple.png'
import './header_style.css'



export default () => {
  return (
    
        <div class="cover">
          <div class='cover_alineacion'>
            <img width='20%' height='5%' src={android}/>
            <img width='20%' height='5%' src={ios}/>
          </div>
            <div class="texto">
              Descarga la app
            </div>
        </div>
  )
}
