import React from 'react'
import android from '../../../../assets/images/header/google.png'
import ios from '../../../../assets/images/header/apple.png'
import './header_style.css'



export default () => {
  return (
    
        <div className="cover">
          <div className='cover_alineacion'>
            <img width='20%' height='5%' src={android}/>
            <img width='20%' height='5%' src={ios}/>
          </div>
            <div className="texto">
              Descarga la app
            </div>
        </div>
  )
}
