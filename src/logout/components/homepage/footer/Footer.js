import React from 'react'
import { Layout,Tag } from 'antd';
import { Row, Col } from 'antd';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare,faInstagram } from '@fortawesome/free-brands-svg-icons'
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
              <p><a href='mailto:contacto@planb.com.mx?Subject=Quiero estar en la app MXOpportunity'>contacto@planb.com.mx</a></p>
            </div>
            <div className="footerSocial">
            <a href='https://www.instagram.com/romano_rodriguez_fernandez/'><FontAwesomeIcon icon={faInstagram} size="3x" style={{ color: "#fffff" }} /></a>
            <a href='https://www.facebook.com/planbinnovacion/'><FontAwesomeIcon icon={faFacebookSquare} size="3x" style={{ color: "#fffff" }} /></a>
            <a href='https://twitter.com/incertidumbre_v/'><FontAwesomeIcon icon={faTwitterSquare} size="3x" style={{ color: "#fffff" }} /></a>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={12} md={6} lg={6} xl={6} >
          <div className="InfoFooterDos">
            <ul>
              <li><Link to="/oportunidades" replace>Oportunidades</Link></li>
              <li><Link to="/" replace>Nosotros</Link></li>
              <li><a href='mailto:contacto@planb.com.mx?Subject=Quiero estar en la app MXOpportunity'>Unete</a></li>
            </ul>
          </div>
        </Col>
        <Col xs={24} sm={12} md={6} lg={6} xl={6} >
          <div className="InfoFooterDos">
            <ul>
              <li>Tel Contacto España:</li>
              <li><Tag color="magenta">(+34) 617 36 3540</Tag></li>
              <li>Tel Contacto Mexico</li>
              <li><Tag color="geekblue">(+52) 771 568 5589</Tag></li>
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
