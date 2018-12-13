import React from 'react'
import {Menu} from 'antd'
import './style.css'

export default () => {
  return (
    <div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px', backgroundColor:'#000000',color:'#ffffff'}}
      >
        <Menu.Item key="1">Quiero ser MXOpportunity</Menu.Item>
        <Menu.Item key="2"> Como negociar de forma internacional</Menu.Item>
      </Menu>
    </div>
  )
}
