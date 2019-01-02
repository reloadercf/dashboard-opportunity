import React, {Component} from 'react'
import {Row, Col, Layout} from 'antd'
import DetailCard from './DetailCard';
import { Nav } from '../homepage/nav/Nav';
import Footer from '../homepage/footer/Footer';
import Header from '../homepage/header/Header';
//import {CarrouselDos} from './CarrouselDos';
//import CardsListDos from '../cardsdos/CardsListDos';

const {
    Content,
  } = Layout;


export class Detail extends Component {
    state={
        publicacion:{}
    }

    componentWillMount(){
        this.get_publicacion()
    }

    get_publicacion=()=>{
        //let{publicacion}=this.state
        let slug_publicacion=this.props.match.params.slug_noticia
        let publicaciones=this.props.noticias
        let publicacion_detail=publicaciones.find(p => {
            return p.slug === slug_publicacion;
        })

        this.setState({publicacion:publicacion_detail})

        console.log(publicacion_detail)       
    }

    render() {
        let{publicacion}=this.state
        
        return (
            <Layout >
                <Header />
                <Nav />
                <Content >
                    <DetailCard publicacion={publicacion} />
                </Content>
                <Footer />
            </Layout>     
     
        );
    }
}
