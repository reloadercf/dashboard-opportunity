import React, { Component } from 'react';
import { Layout} from 'antd';
import Header from "./header/Header";
import {Revista} from "./revista/Revista"
import Footer from "./footer/Footer"
import { Nav } from './nav/Nav';
import { connect } from 'react-redux';


class Homepage extends Component {

  constructor(){
    super()
    this.state={
      noticias:[
        {
            'id':1,
            'title':"Siete marcas de los 90 que han vuelto",
            'subtitle':"¿Quién dijo que los 90 no molaban?",
            'autor':"Eduardo Benitez Gaspar",
            'imagen_uno': 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/buffalo-opening-ceremony-1532257786.jpg?resize=980:*',
            'descripcion_uno':"afirmaba el conde Specer –hermano de Lady Di– al comienzo del documental 'Diana: en sus propias palabras', que podemos ver en Netflix.",
            'imagen_dos':"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/8-21-1532258357.jpg?crop=1xw:1xh;center,top&resize=768:*",
            'descripcion_dos':"afirmaba el conde Specer –hermano de Lady Di– al comienzo del documental 'Diana: en sus propias palabras', que podemos ver en Netflix.",
            'slug':'siete_marcas_de_los_90_que_hanvuelto',
        }, 
        {
          'id':2,
          'title':"Antibacterial Fresh ",
          'subtitle':"Combate las bacterias que causan el mal olor, ahora con una fragancia que da sensación de frescura.",
          'autor':"Carlos Mendoza Hernandez",
          'imagen_uno': 'https://www.rexona.com/content/dam/unilever/rexona/global/pack_design/3d/deodorants_and_fragrances/deodorants/antbacterial_fresh_w&m_1600x596-993010.jpg.ulenscale.669x400.jpg',
          'descripcion_uno':"Con los desodorantes y antitranspirantes convencionales, la fragancia y la protección contra el sudor lentamente van disminuyendo durante el día, ya que el producto se evapora debido a la temperatura corporal y el sudor. Con MotionSense™, puedes mantenerte fresco por más tiempo.",
          'imagen_dos':"https://www.rexona.com/content/dam/unilever/rexona/spain/pack_design/2d/deodorants_and_fragrances/deodorants/product-banner-men-rexona-981615.png.ulenscale.600x578.png",
          'descripcion_dos':"Con los desodorantes y antitranspirantes convencionales, la fragancia y la protección contra el sudor lentamente van disminuyendo durante el día, ya que el producto se evapora debido a la temperatura corporal y el sudor. Con MotionSense™, puedes mantenerte fresco por más tiempo.",
          'slug':'combate_las_bacterias'
        }, 
        {
          'id':3,
          'title':"Antibacterial Fresh ",
          'subtitle':"Combate las bacterias que causan el mal olor, ahora con una fragancia que da sensación de frescura.",
          'autor':"Carlos Mendoza Hernandez",
          'imagen_uno': 'https://www.rexona.com/content/dam/unilever/rexona/global/pack_design/3d/deodorants_and_fragrances/deodorants/antbacterial_fresh_w&m_1600x596-993010.jpg.ulenscale.669x400.jpg',
          'descripcion_uno':"Con los desodorantes y antitranspirantes convencionales, la fragancia y la protección contra el sudor lentamente van disminuyendo durante el día, ya que el producto se evapora debido a la temperatura corporal y el sudor. Con MotionSense™, puedes mantenerte fresco por más tiempo.",
          'imagen_dos':"https://www.rexona.com/content/dam/unilever/rexona/spain/pack_design/2d/deodorants_and_fragrances/deodorants/product-banner-men-rexona-981615.png.ulenscale.600x578.png",
          'descripcion_dos':"Con los desodorantes y antitranspirantes convencionales, la fragancia y la protección contra el sudor lentamente van disminuyendo durante el día, ya que el producto se evapora debido a la temperatura corporal y el sudor. Con MotionSense™, puedes mantenerte fresco por más tiempo.",
          'slug':'Antibacterial_fresh',
        },   
        {
          'id':4,
          'title':"Antibacterial Fresh ",
          'subtitle':"",
          'autor':"Karina Sofia Rodriguez Moreno",
          'imagen_uno': 'https://assets.adidas.mx/image/upload/f_auto,q_auto,fl_lossy/esMX/Images/originals-fw18-sobakov-HPMasthead_GLASS_D_tcm217-270005.jpg',
          'descripcion_uno':"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus modi animi maxime quod eligendi, doloremque provident placeat impedit quo pariatur veritatis error iste quae, aliquid expedita natus dignissimos molestiae?  ",
          'imagen_dos':"https://cdn.planetared.com/wp-content/uploads/2018/02/Adidas-regala-5000-pares-de-zapatos-gratis-1.jpg",
          'descripcion_dos':"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus modi animi maxime quod eligendi, doloremque provident placeat impedit quo pariatur veritatis error iste quae, aliquid expedita natus dignissimos molestiae?  ",
          'slug':'Antibacterial_fresh_dos',
        }, 
        {
          'id':5,
          'title':'Avon Beauty Caddy',
          'subtitle':'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
          'autor':'Genesis',
          'imagen_uno': 'https://01.avoncdn.com/shop/assets/es/prod/PROD_5363590_XL.jpg?w=700',
          'descripcion_uno':'Organizador portátil de productos de belleza. Se puede doblar fácilmente para guardarlo. 9 5?8" x 5 5?8" x 5 1?8". De poliéster y plástico PVC.',
          'imagen_dos':'http://uzo1.com/wp-content/uploads/2015/04/cus2.jpg',
          'descripcion_dos':"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus modi animi maxime quod eligendi, doloremque provident placeat impedit quo pariatur veritatis error iste quae, aliquid expedita natus dignissimos molestiae?  ",
          'slug':'Avon_Beauty_Caddy',
        }, 
        {
          'id':6,
          'title':'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
          'subtitle':'Ea temporibus modi animi maxime quod eligendi, doloremque provident placeat',
          'autor':'Romano Rodriguez ',
          'imagen_uno': 'https://www.definicionabc.com/wp-content/uploads/pasaje2.jpg',
          'descripcion_uno':"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus modi animi maxime quod eligendi, doloremque provident placeat impedit quo pariatur veritatis error iste quae, aliquid expedita natus dignissimos molestiae?  ",
          'imagen_dos':'https://bonsaistoriesflashfiction.files.wordpress.com/2016/05/mitrasmichail-iekdochimiassynantisis-eikona-021.jpg',
          'descripcion_dos':"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus modi animi maxime quod eligendi, doloremque provident placeat impedit quo pariatur veritatis error iste quae, aliquid expedita natus dignissimos molestiae?  ",
          'slug':'lorem_ipsun_dolor',
        },   
        {
          'id':7,
          'title':'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
          'subtitle':'Ea temporibus modi animi maxime quod eligendi, doloremque provident placeat',
          'autor':'Romano Rodriguez ',
          'imagen_uno': 'https://upload.wikimedia.org/wikipedia/commons/5/52/Pasaje_Carlos_Gardel.jpg',
          'descripcion_uno':"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus modi animi maxime quod eligendi, doloremque provident placeat impedit quo pariatur veritatis error iste quae, aliquid expedita natus dignissimos molestiae?  ",
          'imagen_dos':'https://www.eluniverso.com/sites/default/files/styles/powgallery_800/public/fotos/2012/09/03/pr11b030912-photo01_456_336.jpg?itok=ncpirkGC',
          'descripcion_dos':"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus modi animi maxime quod eligendi, doloremque provident placeat impedit quo pariatur veritatis error iste quae, aliquid expedita natus dignissimos molestiae?  ",
          'slug':'Lorem_ipsum_dolor_sit' ,
        },   
  
           
    ]
    }
  }
 
   componentDidMount(){
     this.props.aumentar()
   }



  render() {
    console.log(this.props.numero)
    return (
      <Layout>
          <Header/>
          <Nav />
          <Revista noticias={this.state.noticias}/>
          <Footer/>
      </Layout>   
    );
  }
}

const mapStateToProps = (state) => ({
   numero:state.reducerPrueba
})

const mapDispatchToProps = (dispatch) => {
  return {
    aumentar: () => {
      dispatch({
        type:'AUMENTAR_REDUCER_PRUEBA'
      })
 
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)

