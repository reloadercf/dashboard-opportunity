import React from 'react'
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faWhatsappSquare,  } from '@fortawesome/free-brands-svg-icons'
import '../../Consultoria.css'

export default () => {
  return (
    <div className="Consultoria">
      <div className="HeaderConsultoria">
        <div className="HeaderConsultoriaTitulo">
          <span>-MxOpportunity</span>
          <h1>CONSULTORIA</h1>
          <p>La primera consultora en México en contar con una revista de aplicación móvil en el mercado que mueve moda y tendencias de oportunidad.</p>
          <a href=""><FontAwesomeIcon icon="coffee" />Comenzar</a>
        </div>

        <div className="divRedesSociales">
          <FontAwesomeIcon icon={faFacebookSquare} size="3x" style={{ color: "#fffff", marginBottom: "0.5em" }} />
          <FontAwesomeIcon icon={faTwitterSquare} size="3x" style={{ color: "#fffff" }} />
        </div>
      </div>
      <div className="HeaderConsultoriaDos" >
      </div>
      <img src="https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
    </div>
  )
}
