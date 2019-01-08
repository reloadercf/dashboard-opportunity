import React from 'react'
import {Row, Col} from 'antd';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import './style.css'

export const ArticuloCard = ({slug, title, subtitle, imagen_uno, descripcion_uno})=> {
  return (
    <Row className="recipe-card">
    <Col md={10} sm={24} xs={24}>
        <Link to={`/detail/${slug}`}> 
            <div className="div-img hidden">
                <img className="img" src={imagen_uno} alt="Chai Oatmeal"/>
            </div>
        </Link>
    </Col>
    <Col md={14} sm={24} xs={24}>
        <article>
            <div className="div-category">
                <span>MUSICA</span>
                <span>27 MAYO 2018</span>
            </div>
            <Link to={`/detail/${slug}`}> 
                <h2>{title}</h2>
            </Link>
            <h3>{subtitle}</h3>
                  <div className="ShowInfoCard">
                      <hr />
                      <p>
                          {descripcion_uno}
                      </p>
                      <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}> 
                          <span>Por: ROMANO RODRIGUEZ FERNANDEZ</span>
                          <ul>
                              <li>
                                  <FontAwesomeIcon icon={faTwitterSquare} size="2x" style={{ color: "#15b7b9" }} />
                              </li>
                              <li>
                                  <FontAwesomeIcon icon={faFacebookSquare} size="2x" style={{ color: "#0245a3" }} />
                              </li>

                              <li>
                                  <div className="ShowIcon">
                                      <FontAwesomeIcon icon={faWhatsappSquare} size="2x" style={{ color: "#2eb872" }} />
                                  </div>
                              </li>
                          </ul>

                      </div>
                      
                  </div>

                  <div  className="ShowAutorInfo" > 
                          <span>Por: ROMANO RODRIGUEZ FERNANDEZ</span>
                          <ul>
                              <li>
                                  <FontAwesomeIcon icon={faTwitterSquare} size="2x" style={{ color: "#15b7b9" }} />
                              </li>
                              <li>
                                  <FontAwesomeIcon icon={faFacebookSquare} size="2x" style={{ color: "#0245a3" }} />
                              </li>

                              <li>
                                  <div className="ShowIcon">
                                      <FontAwesomeIcon icon={faWhatsappSquare} size="2x" style={{ color: "#2eb872" }} />
                                  </div>
                              </li>
                          </ul>

                </div>
         </article>
    </Col>
</Row>
   
  )
}

