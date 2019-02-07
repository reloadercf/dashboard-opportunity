import React from 'react'
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import android from '../../../../assets/images/header/google.png'
import ios from '../../../../assets/images/header/apple.png'
import mxopportunity from '../../../../assets/images/logotipos/mxopportunity.jpg'
import './header_style.css'
import './animate.css'



export default () => {
  

  return (

    
        <div className="cover">
        
        <Zoom><img className="cover_cover_alineacion_mx" alt='Descarga' src={mxopportunity}/></Zoom>  
          
          <div className="cover_alineacion_titulo">
          
            <h1 >
            La primer aplicaci&oacute;n m&oacute;vil dedicada a las oportunidades entre M&eacute;xico y el mundo
           </h1>
          </div>
          

           <div className='cover_alineacion'>
            <div className="texto">
            Desc&aacute;rgala, conecta con otras personas, empresas y descubre tus oportunidades.
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
