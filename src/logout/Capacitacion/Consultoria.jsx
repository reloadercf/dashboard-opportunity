import React from 'react'
import {Row, Col, Layout} from 'antd';
import {Link} from 'react-router-dom'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faTwitterSquare, faFacebookSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import { Nav } from '../components/homepage/nav/Nav';
import Header from './components/header/Header';
import Footer from '../components/homepage/footer/Footer';
import './Consultoria.css'


const {
    Content,
  } = Layout;

export const Consultoria = ()=> {
  return (
      <Layout >
          <Header/>
          <Nav />
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
                              MX Opportunity ayuda a la elaboración de proyectos de emprendimiento
                              internacional para potenciar la participación de las empresas en actividades
                              empresariales en mercados de oportunidad, considerando los incentivos que
                              cada uno de los países ofrece a las PYMES para el desarrollo regional considerando
                              la internacionalización y la innovación para la competitividad.
                            </p>
                      </div>
                  </Col>      
              </Row>
              <Row type="flex" justify="center" align="middle">            
                  <Col lg={9} md={9} sm={10} xs={24} >
                      <div className="ConsultoriaInfoDos">
                          <p>
                              Exportar sino para crear sociedades comerciales a través 
                              de las cuales se produzcan productos y servicios a menores costes, 
                              se abra mercado y por lo tanto se alcance un objetivo bidireccional 
                              del cual la empresas puedan verse favorecidas al poder penetrar en distintos mercados.
                          </p>
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
                  <Col lg={18} md={18} sm={20} xs={24} >
                      <div className="RowInfoConsultoriaInnovadora">

                      </div>
                  </Col>

              </Row>
          </Content>
          <Footer  />
      </Layout>   
  )
}

