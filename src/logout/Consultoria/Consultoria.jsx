import React from 'react'
import {Row, Col, Layout} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Header from './components/header/Header';
import Footer from '../components/homepage/footer/Footer';
import consultoria from '../../assets/images/consultoria.png'
import './Consultoria.css'
import Nav from '../components/homepage/nav/Nav';


const {
    Content,
  } = Layout;

export const Consultoria = ()=> {
  return (
      <Layout >
          <Header/>
          <Nav/>
          <Content style={{height:"auto"}}>
              <Row type="flex" justify="center" align="middle">            
                  <Col lg={9} md={9} sm={10} xs={24} >
                      <div className="ConsultoriaInfoUno">
                          <div className="dtl04">
                              <img src="http://lorempixel.com/700/700/" alt="" />
                              <div className="dtl">
                                  <h3>MX Opportunity</h3>
                                    <p>
                                      MXOpporunity
                                      </p>
                               
                              </div>
                          </div>
                      </div>
                  </Col>
                  <Col lg={9} md={9} sm={10} xs={24} >
                      <div className="ConsultoriaInfoDos">
                          <p>
                              MX Opportunity ayuda a la elaboración de proyectos de emprendimiento internacional
                              para potenciar la participación de las empresas en actividades empresariales en mercados de oportunidad.
                          </p>
                      </div>
                  </Col>      
              </Row>
              <Row type="flex" justify="center" align="middle">            
                  <Col lg={9} md={9} sm={10} xs={24} >
                      <div className="ConsultoriaInfoDos">
                          <ul>
                              <li><FontAwesomeIcon icon={faAngleRight} size="2x" style={{ color: "#fffff", marginRight:".5em" }} /> Conecta las oportunidades</li>
                              <li><FontAwesomeIcon icon={faAngleRight} size="2x" style={{ color: "#fffff", marginRight:".5em" }} /> Conecta las oportunidades</li>
                              <li><FontAwesomeIcon icon={faAngleRight} size="2x" style={{ color: "#fffff", marginRight:".5em" }} /> Conecta las oportunidades</li>
                          </ul>
                      </div>
                      
                  </Col>
                  <Col lg={9} md={9} sm={10} xs={24} >
                      <div className="ConsultoriaInfoUno">
                          <div className="dtl04">
                              <img src="http://lorempixel.com/700/700/" alt="" />
                              <div className="dtl">
                                  <h3>MX Opportunity</h3>
                                    <p>
                                      MXOpporunity
                                      </p>
                               
                              </div>
                          </div>
                      </div>
                  </Col>   
              </Row>

              <Row type="flex" justify="center" align="middle">
                  <Col lg={24} md={24} sm={24} xs={24} >
                      <div className="RowInfoConsultoriaInnovadora">
                            <div>
                                <h3>MxOpportunity</h3>
                                <img src={consultoria} alt="Consultoria"/>
                            </div> 

                            <div className="RowInfoConsultoriaInnovadoraDiv">
                              <div>
                                  <span>Oportunidades</span>
                                  <p>
                                      MX Opportunity ayuda a la elaboración de proyectos
                                      de emprendimiento internacional para potenciar.
                                </p>
                              </div>
                              <div>
                                  <span>Oportunidades</span>
                                  <p>
                                      MX Opportunity ayuda a la elaboración de proyectos
                                      de emprendimiento internacional para potenciar.
                                </p>
                              </div>
                                
                               
                            </div> 

                      </div>
                  </Col>

              </Row>
          </Content>
          <Footer  />
      </Layout>   
  )
}

