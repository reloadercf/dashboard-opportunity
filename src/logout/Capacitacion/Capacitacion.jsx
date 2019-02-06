import React from 'react'
import {Row, Col, Layout} from 'antd';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrophy} from '@fortawesome/free-solid-svg-icons'
import Nav from '../components/homepage/nav/Nav';
import Header from './components/header/Header';
import Footer from '../components/homepage/footer/Footer';
import './Capacitacion.css'
import MetaTags from 'react-meta-tags';


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
                                  <img src="https://images.pexels.com/photos/574285/pexels-photo-574285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                                  <div className="dtl">
                                      <FontAwesomeIcon icon={faTrophy} size="3x" style={{ color: "#fffff" }} />
                                      <h3>Lorem Ipsum</h3>
                                      <p>Integer sollicitudin lacus libero, in iaculis turpis tristique sit amet. Nullam augue elit, feugiat nec arcu eget, sodales feugiat ligula.</p>
                                  </div>
                              </div>
                          </div>
                      </Col>
                      <Col lg={8} md={8} sm={24} xs={24} >
                          <div className="item">
                              <div className="dtl21">
                                  <img src="https://images.pexels.com/photos/574285/pexels-photo-574285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                                  <div className="dtl">
                                      <FontAwesomeIcon icon={faTrophy} size="3x" style={{ color: "#fffff" }} />
                                      <h3>Lorem Ipsum</h3>
                                      <p>Integer sollicitudin lacus libero, in iaculis turpis tristique sit amet. Nullam augue elit, feugiat nec arcu eget, sodales feugiat ligula.</p>
                                  </div>
                              </div>
                          </div>

                      </Col>
                      <Col lg={8} md={8} sm={24} xs={24} >
                          <div className="item">
                              <div className="dtl21">
                                  <img src="https://images.pexels.com/photos/574285/pexels-photo-574285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                                  <div className="dtl">
                                      <FontAwesomeIcon icon={faTrophy} size="3x" style={{ color: "#fffff" }} />
                                      <h3>Lorem Ipsum</h3>
                                      <p>Integer sollicitudin lacus libero, in iaculis turpis tristique sit amet. Nullam augue elit, feugiat nec arcu eget, sodales feugiat ligula.</p>
                                  </div>
                              </div>
                          </div>
                      </Col>
                  </Row>
                  <Row type="flex" justify="center" align="middle" className="CapaContentDos">
                            hgghgghg
                  </Row>
              </div>

          </Content>
          <Footer />
      </Layout>   
  )
}

