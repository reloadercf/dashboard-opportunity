import React from 'react'
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import android from '../../../../assets/images/header/google.png'
import ios from '../../../../assets/images/header/apple.png'
import mxopportunity from '../../../../assets/images/logotipos/mxopportunity.jpg'
import './header_style.css'

export default () => {
  return (
    
        <div className="cover">
        <Zoom><img className="cover_cover_alineacion_mx" alt='Descarga' src={mxopportunity}/></Zoom>  
          
          <div className="cover_alineacion_titulo">
            <h1 >
               Moda y Tendencia de Oportunidades de Libre Comercio entre México y el Mundo
           </h1>
          </div>
          

           <div className='cover_alineacion'>
            <div className="texto">
              Descarga la app
            </div>
            <div className="cover_cover_alineacion_apps">
             <Flip>
                <img alt='Descarga' src={android}/>
             </Flip>
             <Flip>
                <img alt='descarga' src={ios}/>
             </Flip>
            </div>
          </div>
            
        </div>
  )
}
