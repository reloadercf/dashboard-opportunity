import React from 'react'
import { Layout } from 'antd'
import './style.css'
import Particles from 'react-particles-js';
import mundoverde from '../../../../assets/images/arbol.svg'
import { ArticulosList } from '../articulos/ArticulosList';
import airplane from '../../../../assets/images/airplane.jpg'
const {
    Content,
  } = Layout;


export const Revista= (props) => {
  return (
  <Content style={{ padding: '0 50px', marginTop: 100 }} >
    <div className="ContentDivMapa">
      <div className='texto-content'>
      <p> Nosotros difundimos, divulgamos, promovemos y conectamos oportunidades</p>
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
                    value:50,
                  },size: {
                    value: 2,
                  },
            		}
            	}}
              style={{
                width: "100%",
	            	height: "100%",
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


