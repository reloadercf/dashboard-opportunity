import React, { Component } from 'react'
import { Layout, Menu, Icon,} from 'antd';

const {Sider,} = Layout;

export default class Patrocinadores extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
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
              <Icon type="desktop" />
              <span>Nuevo Patrocinador</span>
            </Menu.Item>
          </Menu>
        </Sider>
      </div>
    )
  }
}
