import React from 'react'
import { Layout } from 'antd'
import './style.css'
import { Row, Col } from 'antd';
import mapa from '../../../../assets/images/world-map.png'
import mundoverde from '../../../../assets/images/arbol.svg'
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
                <p> Nosotros difundimos, divulgamos, promovemos y conectamos oportunidades</p>
            </div>
        </Col>
      </Row>
    </div>
    <div className="divConviccion">
        <p> -Nuestra Convicción-</p>
        <span>"Comprometidos con  la detección de oportunidades para las personas, los emprendedores y las empresas.
"</span>
    </div>
    
    <div>
      <ArticulosList noticias={props.noticias}/>
    </div>

    <div className="divMundoVerde">
            <div className="ContentDivNaturaleza">
              <img alt='Naturaleza' src={mundoverde} />
            </div>  
            <p>POR UN MUNDO CON MÁS ARBOLES Y MENOS PAPEL</p>   
      </div>
  </Content>
  )
}


