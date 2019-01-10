import React, { Component } from 'react';
import { Layout} from 'antd';
import Header from "./header/Header";
import {Revista} from "./revista/Revista"
import Footer from "./footer/Footer"

import { connect } from 'react-redux';
import {actionGetArticulosDestacados} from '../../../Store/Acciones'
import Nav  from './nav/Nav';


class Homepage extends Component {

  constructor(){
    super()
    this.state={
      
    }
  }
   componentDidMount(){
    this.props.getArticulosDestacados();
   }
 
  render() {
    console.log(this.props.destacados)
    return (
      <Layout>
          <Header/>
          <Nav/>
          <Revista noticias={this.props.destacados.articulosDestacados}/>
          <Footer/>
      </Layout>   
    );
  }
}

const mapStateToProps = (state) => ({
  destacados: state.reducerArticulos,
})

const mapDispatchToProps = (dispatch) => {
  return {
    getArticulosDestacados: () => {
      dispatch(actionGetArticulosDestacados());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)

