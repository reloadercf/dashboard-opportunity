import React, { Component } from 'react'
import { Card,Icon } from 'antd';
import './main_style.css'
import { Link } from 'react-router-dom'


export default class Main extends Component {
  render() {
    return (
      <div className='dash_menu'>
        <Card style={{ width:'33%'}}> <center><Link to={'redactar'}><Icon type="file-text" style={{ color:'#000000', fontSize:'400%'}}/><br/>Redactar</Link></center></Card>
        <Card style={{ width:'33%' }}><center><Link to={'Publicado'}><Icon type="read" style={{ color:'#3ED691', fontSize:'400%'}}/><br/>En Revista</Link></center></Card>
        <Card style={{ width:'33%' }}><center><Link to={'Borrador'}><Icon type="file-search" style={{ color:'#0575F8', fontSize:'400%'}}/><br/>Borrador</Link></center></Card>
        <Card style={{ width:'33%' }}><center><Link to={'Patrocinadores'}><Icon type="crown" style={{ color:'#F5A623', fontSize:'400%'}}/><br/>Patrocinador</Link></center></Card>
        <Card style={{ width:'33%' }}><center><Link to={'Categorias'}><Icon type="appstore" style={{ color:'#F2188F', fontSize:'400%'}}/><br/>Categorias</Link></center></Card>
        <Card style={{ width:'33%' }}><center><Link to={'Papeleta'}><Icon type="stop" style={{ color:'#000000', fontSize:'400%'}}/><br/>Papeleta</Link></center></Card>
      </div>
    )
  }
}
