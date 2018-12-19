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
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Mis Categorias</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Crear</span>
            </Menu.Item>
          </Menu>
        </Sider>
      </div>
    )
  }
}
