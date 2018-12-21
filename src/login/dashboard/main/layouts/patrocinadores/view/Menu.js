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
      <Menu theme="dark" style={{backgroundColor:"#000000",background:"#000000",borderColor:"#000000"}} defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
          <Icon type="pie-chart" />
          <span>Patrocinadores</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to='Registrarpatrocinador'>
            <Icon type="desktop" />
            <span>Nuevo Patrocinador</span>
          </Link>  
        </Menu.Item>
      </Menu>
    </Sider>
    
  </div>
  )
}
