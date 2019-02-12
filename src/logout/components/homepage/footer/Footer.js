import React from 'react'
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import './footer.css'
import mxopportunity from '../../../../assets/images/logotipos/mxopportunity.jpg'
const { Footer } = Layout;


export default () => {
  return (

    <Footer style={{ textAlign: 'center', backgroundColor: '#000000', color: '#ffffff' }} >
      <Row gutter={16} type="flex" justify="space-between" align="middle" >
        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
          <div className="InfoFooterUno">
            <div>
              <img alt='Descarga' src={mxopportunity} />
            </div>
            <div>
              <p>contacto@planb.com.mx</p>
            </div>
            <div className="footerSocial">
              <FontAwesomeIcon icon={faFacebookSquare} size="3x" style={{ color: "#fffff" }} />
              <FontAwesomeIcon icon={faTwitterSquare} size="3x" style={{ color: "#fffff" }} />
            </div>
          </div>
        </Col>
        <Col xs={24} sm={12} md={6} lg={6} xl={6} >
          <div className="InfoFooterDos">
            <ul>
              <li>Oportunidades</li>
              <li>Nosotros</li>
              <li>Unete</li>
            </ul>
          </div>
        </Col>
        <Col xs={24} sm={12} md={6} lg={6} xl={6} >
          <div className="InfoFooterDos">
            <ul>
              <li>Pachuca de Soto Hidalgo</li>
              <li>771-568-55-89</li>

            </ul>
          </div>
        </Col>
      </Row>
      <Row gutter={16} type="flex" justify="center" align="middle" >
        <div className="fotterTerminosDos">
          <p>
            MxOpportunity es una aplicacion creada para difundir las oportunidades de libre comercio entre
            Mexico y el mundo.
            </p>
        </div>
      </Row>
    </Footer>
  )
}
