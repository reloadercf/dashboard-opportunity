import React, { Component } from 'react'
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import android from '../../../../assets/images/header/google.png'
import ios from '../../../../assets/images/header/apple.png'
import mxopportunity from '../../../../assets/images/logotipos/mxopportunity.jpg'
import celOpportunity from '../../../../assets/images/header/celularMXOpportunity.png'
import './header_style.css'
import './animate.css'

export default class Header extends Component {
    render() {
    return (
      <div className="cover2">
        <div className="cover">
          <Zoom>
            <img className="cover_cover_alineacion_mx" alt='Descarga' src={mxopportunity} />
          </Zoom>
          <Zoom>
            <img className="cover_cover_alineacion_cell" alt='Descarga' src={celOpportunity} />
          </Zoom>

          <div className="cover_alineacion_titulo">
            <h1>
              La primera y única aplicación móvil dedicada a las oportunidades entre México y el mundo.
           </h1>

            <div className='animation'>
              Personas, Empresas, Oportunidades
            </div>
          </div>

           
          <div className='cover_alineacion'>
          
            <div className="texto">
              <entrar>Descargala de forma gratuita </entrar> <entrar><span>y conecta oportunidades</span></entrar>
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

