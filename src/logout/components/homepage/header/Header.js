import React from 'react'
import android from '../../../../assets/images/header/google.png'
import ios from '../../../../assets/images/header/apple.png'
import mxopportunity from '../../../../assets/images/logotipos/mxopportunity.jpg'
import './header_style.css'



export default () => {
  return (
    
        <div className="cover">
           <img className="cover_cover_alineacion_mx" alt='Descarga' src={mxopportunity}/>
          <div className='cover_alineacion'>
          
            <div className="texto">
              Descarga la app
            </div>
            <div className="cover_cover_alineacion_apps">
              <img alt='Descarga' src={android}/>
              <img alt='descarga' src={ios}/>
            </div>
          </div>
            
        </div>
  )
}
