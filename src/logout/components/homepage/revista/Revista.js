import React from 'react'
import { Layout } from 'antd'
import './style.css'
import { Row, Col } from 'antd';
const {
    Content,
  } = Layout;

export const Revista= () => {
  return (
        <Content style={{ padding: '0 50px', marginTop: 64 }} >
            <div className="ContentDivMapa">
              <Row gutter={16} type="flex" justify="center" align="center" >
                <Col xs={24} sm={12} md={11} lg={11} xl={11}>
                                
                </Col>
                <Col xs={24} sm={12} md={11} lg={11} xl={11}>
                  <div>

                  </div>
                </Col>
              </Row>
            </div>
        </Content>
  )
}


