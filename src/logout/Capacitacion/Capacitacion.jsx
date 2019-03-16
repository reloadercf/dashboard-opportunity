import React from 'react'
import {Row, Col, Layout} from 'antd';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrophy,faCloudDownloadAlt, faGlobeAmericas} from '@fortawesome/free-solid-svg-icons'
import Nav from '../components/homepage/nav/Nav';
import Header from './components/header/Header';
import Footer from '../components/homepage/footer/Footer';
import mexin from '../../assets/images/cards_op/mexintheworld.jpg'
import nature from '../../assets/images/cards_op/mexico_natural.jpeg'
import estilo from '../../assets/images/cards_op/estilo.jpeg'
import './Capacitacion.css'
//import MetaTags from 'react-meta-tags';


const {
    Content,
  } = Layout;

export const Capacitacion = ()=> {
  return (
      <Layout >
          <Header />
          <Nav />
          <Content style={{ height: "auto" }}>
               {/* <MetaTags>
                  <title>Capactacion</title>
                  <meta name="description" content="Capacitacion especializada" />
                  <meta property="og:title" content="Capacitacion" />
                  <meta property="og:description" content="Capacitacion de forma especializada" />
                  <meta property="og:image" content="https://images.pexels.com/photos/1261373/pexels-photo-1261373.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                  <meta property="og:url" content="https://mxopportunity.com/capacitacion" />
              </MetaTags> */}
              <div className="CapaContent">
                  <Row type="flex" justify="center" align="middle">
                      <Col lg={8} md={8} sm={24} xs={24}>
                          <div className="item">
                              <div className="dtl21">
                                  <img src={mexin} alt="" />
                                  <div className="dtl">
                                      <FontAwesomeIcon icon={faGlobeAmericas} size="3x" style={{ color: "#ffffff" }} />
                                      <h3>México en el mundo</h3>
                                      <p>Los que triunfan y sus experiencias. Conecta con las empresas mexicanas en el mundo.</p>
                                  </div>
                              </div>
                          </div>
                      </Col>
                      <Col lg={8} md={8} sm={24} xs={24} >
                          <div className="item">
                              <div className="dtl21">
                                  <img src={nature} alt="" />
                                  <div className="dtl">
                                      <FontAwesomeIcon icon={faTrophy} size="3x" style={{ color: "#ffffff" }} />
                                      <h3>Why?</h3>
                                      <p>Cuando quieras saber porque México es una oportunidad,
tan sólo tendrás que hacer click...</p>
                                  </div>
                              </div>
                          </div>

                      </Col>
                      <Col lg={8} md={8} sm={24} xs={24} >
                          <div className="item">
                              <div className="dtl21">
                                  <img src={estilo} alt="" />
                                  <div className="dtl">
                                      <FontAwesomeIcon icon={faCloudDownloadAlt} size="3x" style={{ color: "#ffffff" }} />
                                      <h3>Descarga MXOpportunity</h3>
                                      <p>Si quieres que te encuentren sé nuestro patrocinador.
Si quieres encontrar sé nuestro seguidor.</p>
                                  </div>
                              </div>
                          </div>
                      </Col>
                  </Row>
                  <Row type="flex" justify="center" align="middle" className="CapaContentDos">
                  La única y primera App Móvil
en tendencias de oportunidad entre México y el Mundo.
                  </Row>
              </div>

          </Content>
          <Footer />
      </Layout>   
  )
}

