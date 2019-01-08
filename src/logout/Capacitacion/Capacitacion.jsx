import React from 'react'
import {Row, Col, Layout} from 'antd';
import { Nav } from '../components/homepage/nav/Nav';
import Header from './components/header/Header';
import Footer from '../components/homepage/footer/Footer';
import './Capacitacion.css'


const {
    Content,
  } = Layout;

export const Capacitacion = ()=> {
  return (
      <Layout >
          <Header/>
          <Nav />
          <Content style={{height:"auto"}}>          
          </Content>
          <Footer  />
      </Layout>   
  )
}

