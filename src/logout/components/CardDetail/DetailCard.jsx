import React, {Component} from 'react';
import {Row, Col , Layout, Tag, Input, AutoComplete, Button, Icon, Select} from 'antd'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMobile} from '@fortawesome/free-solid-svg-icons'
import {faTwitterSquare, faFacebookSquare, faWhatsappSquare} from '@fortawesome/free-brands-svg-icons'
import MetaTags from 'react-meta-tags';
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton
  } from 'react-share';
import Android from '../../../assets/images/header/google.png';
import Apple from '../../../assets/images/header/apple.png'
import Flip from 'react-reveal/Flip';

  const {Content} = Layout;
  const InputGroup = Input.Group;
  const Option = Select.Option;



class DetailCard extends Component {
  actionCallPublicidadUno=(llamada) => {
    switch (llamada.llamada_accion_uno) {
      case 'Llamar':
        return (
          <div>
              <span>{llamada.url_llamada_uno}</span>
          </div>
        );
      case 'Visitar':
        return (
            <a href={llamada.url_llamada_uno}>Visitar</a>
        );
      case 'Compar':
        return (
            <a href={llamada.url_llamada_uno}>Comprar</a>
        );
      default:
        return null;
    }
  }



  actionCallPublicidadDos=(llamada) => {
    switch (llamada.llamada_accion_dos) {
      case 'Llamar':
        return (
            <span>{llamada.url_llamada_uno}</span>
        );
      case 'Visitar':
        return (
            <a href={llamada.url_llamada_uno}>Visitar</a>

        );
      case 'Compar':
        return (
            <a href={llamada.url_llamada_uno}>Comprar</a>
        );
      default:
        return null;
    }
  }
  state = {
    dataSource: [],
  }
  handleChange = (value) => {
    this.setState({
      dataSource: !value || value.indexOf('@') >= 0 ? [] : [
        `${value}@gmail.com`,
        `${value}@icloud.com`,
        `${value}@outlook.com`,
        `${value}@hotmail.com`,
        `${value}@yandex.com`,
        `${value}@`,

      ],
    });
  }

    render() {
        
        let icono=<FontAwesomeIcon
        icon={faMobile}
        size="2x"
        style={{
            color: "#000000",
        }} />
        let {detail} = this.props 
       console.log(this.props)
        return (
            <div id="article" name="article">
                {detail? 
                    <div>
                        <Content style={{ marginTop: 64 }}>
                            <MetaTags>
                                <title>{detail.titulo}</title>
                                <meta name="description" content="Some description." />
                                <meta property="og:title" content={detail.titulo} />
                                <meta property="og:image" content={detail.imagen_destacada_uno} />

                            </MetaTags>
                         
                            <Row type="flex" justify="center" align="middle" >
                                <Col lg={18} md={18} xs={22}>
                                    <Row>
                                        <Col md={24}>
                                            <div className="container_detail_title">
                                                <h1 className="detail_title">{detail.titulo}</h1>
                                            </div>
                                        </Col>
                                        <Col md={24}>
                                            <span className="detail_subtitle">
                                            <Tag color="geekblue"># {detail.categoria}</Tag>
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row type="flex" justify="center" align="middle">
                                        <Col md={18} sm={18} xs={16}>
                                            <div className="detail_autor">
                                                <span> Por cortesia de: {detail.cortesia_de}</span>
                                                <span>{detail.fecha_mostrada}</span>
                                            </div>
                                        </Col>
                                        <Col md={6} sm={6} xs={8}> 
                                            <div className="iconos_detail">
                                                <ul >
                                                    <li>

                                                    <TwitterShareButton
                                                            url={'https://mxopportunity.com'}
                                                            quote={detail.titulo} 
                                                        >
                                                           <FontAwesomeIcon
                                                            icon={faTwitterSquare}
                                                            size="2x"
                                                            style={{
                                                                color: "#15b7b9"
                                                            }} />
                                                        </TwitterShareButton>

                                                    </li>
                                                    <li>
                                                        <FacebookShareButton
                                                            url={'https://mxopportunity.com'}
                                                            quote={detail.titulo}                                                            
                                                        >
                                                          <FontAwesomeIcon
                                                            icon={faFacebookSquare}
                                                            size="2x"
                                                            style={{
                                                                color: "#0245a3"
                                                            }} />
                                                        </FacebookShareButton>
                                                    </li>
                                              
                                                    <li >
                                                        <div className="ShowIcon">

                                                        <WhatsappShareButton
                                                            url={'https://mxopportunity.com'}
                                                            quote={detail.titulo}      
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={faWhatsappSquare}
                                                                size="2x"
                                                                style={{
                                                                    color: "#2eb872",
                                                                }} />
                                                        </WhatsappShareButton>

                                                          
                                                        </div>
                                                    </li>

                                                </ul>

                                            </div>
                                        </Col>
                                    </Row>

                                </Col>
                            </Row>
                            <Row type="flex" justify="center" align="middle">
                                <Col lg={16} md={16} xs={22} className="detail-img1">
                                    <img src={detail.imagen_destacada_uno} alt="" />
                                    <especializado>
                                        <h2>¡Descarga ahora la app! <opportunity>MXOpportunity</opportunity> disfruta de este y más contenido especializado en oportunidades.</h2>
                                        <div className='cover_cover_alineacion_app'><Flip><img src={Android} alt='Descarga para android' /></Flip><Flip><img src={Apple} alt='Descarga para iphone' /></Flip></div>
                                        <h3>Ó Escribe tu correo y te enviamos el link de descarga:</h3>
                                        <InputGroup compact>
                                        
                                        <Select defaultValue={icono}>
            <Option value="Sign Up"><Icon type="android" />Android</Option>
            <Option value="Sign In"><Icon type="apple" />IPhone</Option>
          </Select>
         
          <AutoComplete
            dataSource={this.state.dataSource}
            style={{ width: 300 }}
            onChange={this.handleChange}
            placeholder="Escribe tu correo electrónico"
          />
        </InputGroup>                   <Button>Enviar link por correo<Icon type="thunderbolt" /></Button>
                                    </especializado>
                                </Col>

                            </Row>


                            
                        </Content>

                    </div>
                :null
                }
            </div>
            

        );
    }
}

export default DetailCard;