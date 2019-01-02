import React, {Component} from 'react';
import {Row, Col , Layout} from 'antd'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitterSquare, faFacebookSquare, faWhatsappSquare} from '@fortawesome/free-brands-svg-icons'
const {
    Content,
  } = Layout;
class DetailCard extends Component {
    render() {
        let {publicacion} = this.props
        return (
            <Content style={{ marginTop: 64 }}>
                <Row type="flex" justify="center" align="middle" >
                    <Col lg={18} md={18} xs={22}>
                        <Row>
                            <Col md={24}>
                                <div className="container_detail_title">
                                    <h1 className="detail_title">{publicacion.title}</h1>
                                </div>

                            </Col>
                            <Col md={24}>
                                <span className="detail_subtitle">
                                    {publicacion.subtitle}
                                </span>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" align="middle">
                            <Col md={18} sm={18} xs={16}>
                                <div className="detail_autor">
                                    <span> Autor: {publicacion.autor}</span>
                                    <span>Fecha de la noticia</span>
                                </div>
                            </Col>
                            <Col md={6} sm={6} xs={8}>
                                <div className="iconos_detail">
                                    <ul >
                                        <li>
                                            <FontAwesomeIcon
                                                icon={faTwitterSquare}
                                                size="2x"
                                                style={{
                                                    color: "#15b7b9"
                                                }} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon
                                                icon={faFacebookSquare}
                                                size="2x"
                                                style={{
                                                    color: "#0245a3"
                                                }} />
                                        </li>
                                        <li >
                                            <div className="ShowIcon">
                                                <FontAwesomeIcon
                                                    icon={faWhatsappSquare}
                                                    size="2x"
                                                    style={{
                                                        color: "#2eb872",
                                                    }} />
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
                        <img src={publicacion.imagen_uno} alt="" />
                        <div className="detail_descripcion_uno" >
                            <p style={{ marginTop: "1em" }}> {publicacion.descripcion_uno}</p>
                        </div>
                    </Col>



                </Row>
                <Row type="flex" justify="center" align="middle">
                    <Col lg={16} md={16} sm={16} xs={22} className="detail-img2">
                        <img src={publicacion.imagen_uno} alt="" />
                        <div className="detail_descripcion_uno" >
                            <p style={{ marginTop: "1em" }}> {publicacion.descripcion_dos}</p>
                        </div>
                    </Col>
                </Row>
            </Content>

        );
    }
}

export default DetailCard;