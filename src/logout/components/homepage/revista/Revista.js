import React from 'react'
import { Layout } from 'antd'
import './style.css'
import Particles from 'react-particles-js';
import mundoverde from '../../../../assets/images/mas_arboles.jpg'
import { ArticulosList } from '../articulos/ArticulosList';
import airplane from '../../../../assets/images/career.jpg'
const {
    Content,
  } = Layout;


export const Revista= (props) => {
  return (
  <Content style={{marginTop: 150 }} >
    <div className="ContentDivMapa">
      <div className='texto-content'>
      <p> Somos el ecosistema digital que conecta tus oportunidades</p>
      </div>
            <Particles 
              params={{
            		particles: {
            			line_linked: {
                    distance:80,
                    color: "#000000",
                    size:10,
            				shadow: {
            					enable: false,
                    }
                  },
                  color:{
                    value: "#000000"
                  },
                  number: {
                    value:70,
                  },size: {
                    value: 2,
                  },
            		}
            	}}
              style={{
                width: "100%",
	            	height: "auto",
                backgroundImage: `url(${airplane})`,
                backgroundPosition:'50% 50%',
                backgroundSize:'cover',
                backgroundAttachment: 'fixed',
              }}
            /> 
    </div>
    <div className="divConviccion">
        <p> -Nuestra Convicción-</p>
        <span>"Comprometidos con  la detección de oportunidades para las personas, los emprendedores y las empresas.
"</span>
    </div>
    
    <div>
      <ArticulosList noticias={props.noticias}/>
    </div>

    <div className="divMundoVerde">
            <div className="ContentDivNaturaleza">
              <img alt='Naturaleza' src={mundoverde} />
            </div>  
            <p>POR UN MUNDO CON MÁS ÁRBOLES Y MENOS PAPEL</p>   
      </div>
  </Content>
  )
}


