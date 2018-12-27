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
              <Row>
                <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
                <Col xs={20} sm={16} md={12} lg={8} xl={4}>Col</Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
              </Row>
              </div>
        </Content>
  )
}


