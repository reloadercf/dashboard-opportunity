import React from 'react'
//import Zoom from 'react-reveal/Zoom';
//import Flip from 'react-reveal/Flip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import '../../Capacitacion.css'

export default () => {
  return (
    <div className="Capacitacion">
      <div className="HeaderCapacitacion">
        <div className="HeaderCapacitacionTitulo">
          <span>-MxOpportunity</span>
          <h1>CAPACITACIÓN</h1>
          <p>La primera consultora en México en contar con una revista de aplicación móvil en el mercado que mueve moda y tendencias de oportunidad.</p>
          <a href="https://www.google.com/"><FontAwesomeIcon icon="coffee" />¿Comó lo hacemos?</a>
        </div>

        <div className="divRedesSociales">
          <FontAwesomeIcon icon={faFacebookSquare} size="3x" style={{ color: "#fffff" }} />
          <FontAwesomeIcon icon={faTwitterSquare} size="3x" style={{ color: "#fffff" }} />
        </div>
      </div>
      <div className="HeaderCapacitacionDos" >
      </div>
     
    </div>
  )
}
