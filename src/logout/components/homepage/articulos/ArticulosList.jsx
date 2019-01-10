import React from 'react'
import {Row, Col} from 'antd'
import { ArticuloCard } from './ArticuloCard';
import './style.css'



export const ArticulosList = ({noticias})=> {
 
  return (
      <div>
          <Row type="flex" justify="space-around">
              {noticias && noticias.length > 0
                  ? noticias.map((c, key) => (
                      <Col md={24} sm={24} xs={24} key={key}>
                          <ArticuloCard {...c} />
                      </Col>
                  ))
                  : (
                      <div>
                          Cargando
                     </div>
                  )
              }
          </Row>
      </div>
   
  )
}

