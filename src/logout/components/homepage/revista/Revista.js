import React from 'react'
import { Layout } from 'antd'
import './style.css'
import { Row, Col } from 'antd';
import mapa from '../../../../assets/images/world-map.png'
import { ArticulosList } from '../articulos/ArticulosList';
const {
    Content,
  } = Layout;

export const Revista= (props) => {
  return (
  <Content style={{ padding: '0 50px', marginTop: 64 }} >
    <div className="ContentDivMapa">
      <Row gutter={16} type="flex" justify="center" align="middle" >
        <Col xs={24} sm={12} md={11} lg={11} xl={11}>
           <div className="ContentDivMapaDiv">
            <img  alt='Mapa' src={mapa}/> 
           </div>               
        </Col>
        <Col xs={24} sm={12} md={11} lg={11} xl={11} >
            <div className="ContentDivMapaDiv"> 
                <span>¿Tienes una idea?</span>
                <p> Nosotros conectamos las Oportunidades</p>
                <a href="www.google.com">Empezar</a>
            </div>
        </Col>
      </Row>
    </div>
    <div className="divConviccion">
        <p> -Nuestra Convicción-</p>
        <span>"Comprometidos con la deteccion de oportunidades para las empresas en crecimiento"</span>
    </div>
    <div>
      <ArticulosList noticias={props.noticias}/>
    </div>
  </Content>
  )
}


