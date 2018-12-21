import React from 'react'
import { Layout, Menu, Icon,} from 'antd';
import { Link } from "react-router-dom";
const {Sider,} = Layout;


export default () => {
    
  return (
    <div>
        
    <Sider
      
      style={{backgroundColor:"#000000",background:"#000000",borderColor:"#000000"}}
    >
      <div className="logo"  />
      <Menu theme="dark" style={{backgroundColor:"#000000",background:"#000000",borderColor:"#000000"}} defaultSelectedKeys={['2']} mode="inline">
        <Menu.Item key="1">
          <Link to='Verpatrocinador'>
            <Icon type="pie-chart" />
            <span>Patrocinadores</span>
          </Link>  
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="desktop" />
          <span>Nuevo Patrocinador</span>
        </Menu.Item>
      </Menu>
    </Sider>
    
  </div>
  )
}
