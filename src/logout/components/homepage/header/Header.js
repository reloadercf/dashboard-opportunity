import React, { Component } from 'react'
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import android from '../../../../assets/images/header/google.png'
import ios from '../../../../assets/images/header/apple.png'
import mxopportunity from '../../../../assets/images/logotipos/mxopportunity.jpg'
import './header_style.css'
import './animate.css'

export default class Header extends Component {
    render() {
    return (
      <div>
        <div className="cover">

          <Zoom><img className="cover_cover_alineacion_mx" alt='Descarga' src={mxopportunity} /></Zoom>

          <div className="cover_alineacion_titulo">
            <h1 >
              La primer aplicaci&oacute;n m&oacute;vil dedicada a las oportunidades entre M&eacute;xico y el mundo
           </h1>
          </div>


          <div className='cover_alineacion'>
            <div className='animation'>
              Personas, Empresas, Tus Oportunidades
            </div>
            <br></br>
            <div className="texto">
              <entrar>Desc&aacute;rgala </entrar> <entrar><span> y conecta oportunidades</span></entrar>
            </div>
            <div className="cover_cover_alineacion_apps">
              <Flip className='call-to-action'>
                <img alt='Descarga' src={android} />
              </Flip>
              <Flip>
                <img alt='descarga' src={ios} />
              </Flip>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

