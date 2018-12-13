import React from 'react'
import { Layout } from 'antd'

const {
    Content,
  } = Layout;

export default () => {
  return (
    <div>
          <Layout className="layout">
            <Content style={{ margin: '24px 16px 0' }}>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                Contenido de la revista
                </div>
            </Content>
          </Layout>   
    </div>
  )
}
