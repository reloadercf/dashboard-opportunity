import React, { Component } from 'react'
import './redactar_style.css'
//import ReactCrop from 'react-image-crop';
import {Input, Col, Checkbox, Button, Icon, Upload, Card, TimePicker, DatePicker, Cascader, Steps, message} from 'antd';
import moment from 'moment';

const InputGroup = Input.Group;
const { TextArea } = Input;
const Step = Steps.Step;

const options = [{
  value: 'viajar',
  label: 'viajar',
}, {
  value: 'negocios',
  label: 'negocios',
}];

const status = [{
  value: 'Publicado',
  label: 'Publicado',
}, {
  value: 'No publicado',
  label: 'Borrador',
}];

const status_video = [
  {
    value: 'sinvideo',
    label: 'sinvideo',
  },
  {
  
  value: 'youtube',
  label: 'youtube',
}, {
  value: 'vimeo',
  label: 'vimeo',
}];

const llamadas_accion = [
  {
    value: 'Contactar',
    label: 'Contactar',
  },
  {
    value: 'Visitar',
    label: 'Visitar',
  },
  {
  
  value: 'Comprar',
  label: 'Comprar',
}, {
  value: 'Llamar',
  label: 'Llamar',
},{
  value: 'Sinllamada',
  label: 'Sin Llamada',
}];


const steps = [{
  title: 'Articulo',
  content: [

    <InputGroup size="large" className='inputs'>
    <p/>
            <Col span={25}>
{/* titulo             */}
              <Input size="large" placeholder="Titulo del articulo" />
            </Col>
{/* En portada si o no             */}
                <p/><p/>            
              <Checkbox onChange={onChange}>Mostrar en Portada</Checkbox> 
          </InputGroup>,<p/>,
                    <InputGroup  size="large" compact>
                    <Col span={10}>
        {/* categoria             */}            
                      <Cascader style={{ width: '100%' }} options={options} placeholder="Seleccione la categoria" />
                    </Col>
                    <Col span={10}>
        {/* Status             */}            
                      <Cascader style={{ width: '100%' }} options={status} placeholder="Status publicacion" />
                    </Col>
        {/* Se subira la imagen recortada falta reactCrop             */} 
        {/* subir imagen  destacada uno          */}
        
                      <Upload>
                        <Button>
                          <Icon type="upload" /> Imagen destacada uno
                        </Button>
                      </Upload>
                  </InputGroup>,<p/>
  ],
}, {
  title: 'Redacta',
  content: [
<p/>,
    <InputGroup  size="large" compact>
            <Col span={24}>
{/* Primer text area para cuerpo uno            */}           
              <TextArea placeholder="Redacción de primer cuerpo" autosize={{ minRows: 4}}/>
            </Col>
{/* Falta reactcrop            */}
{/* Subir imagen   destacada dos         */}            
              <Upload>
                <Button>
                  <Icon type="upload" /> Imagen destacada dos
                </Button>
              </Upload>
          </InputGroup>,
          <p/>,
          <InputGroup  size="large" compact>
          <Col span={24}>
{/* segundo text area para cuerpo dos            */}           
            <TextArea placeholder="Redacción de cuerpo dos" autosize={{ minRows: 4}}/>
          </Col>
          </InputGroup>,
          <p/>,
          <InputGroup  size="large" compact>
            <Col span={8}>
{/* Video            */}                 
              <Cascader style={{ width: '100%' }} options={status_video} placeholder="Opciones de Video" />
            </Col>
            <Col span={12}>
{/* Url de video         */}                 
              <Input size="large" placeholder="URL Video" />
            </Col>

          </InputGroup>,
          <p/>


  ],
}, {
  title: 'Pie',
  content: [

<p/>,
//LLamadas a la acción
    <InputGroup>
    <Col span={12}>
        <Card title="Llamada de accion 1">
            <p><Cascader style={{ width: '100%' }} options={llamadas_accion} placeholder="Opciones de llamada 1" /></p>
            <p>
{/* Falta reactcrop            */}
{/* Subir imagen llamada 1           */}            
                <Upload>
                  <Button>
                    <Icon type="upload" /> Imagen llamada 1
                  </Button>
                </Upload>
            </p>
            <p><Input size="large" placeholder="URL ó Numero" /></p>
        </Card>
    </Col>
    <Col span={12}>
        <Card title="Llamada de accion 2">
        <p><Cascader style={{ width: '100%' }} options={llamadas_accion} placeholder="Opciones de llamada 2" /></p>
            <p>
{/* Falta reactcrop            */}
{/* Subir imagen  llamada 2          */}            
                <Upload>
                  <Button>
                    <Icon type="upload" /> Imagen llamada 2
                  </Button>
                </Upload>
            </p>
            <p><Input size="large" placeholder="URL ó Numero" /></p>
        </Card>
    </Col>
  </InputGroup>,
  <p/>,
  <InputGroup  size="large" compact>
    <Col span={20}>
      <Input size="large" placeholder="Cortesia de:" />
    </Col>
  </InputGroup>,
  <p/>,


  ],
}
, {
  title: 'Fecha',
  content: [
    
    <p/>,
    <InputGroup  size="large" compact>
    <Col span={20}>
    <Card title="Configuracion de Fechas">
    <p>Fecha Mostrada: <DatePicker /></p>
    <p>Fecha y Hora de publicación:</p>
    <p><DatePicker /> <TimePicker  defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} /></p>
    <p>Fecha de fin de publicación: <DatePicker /></p>
    </Card>
    </Col>
  </InputGroup>,
  <p/>  



  ],
}];




function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}




export default class Redactar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  state = {
    dataSource: [],
  }
  handleChange = (value) => {
    this.setState({
      dataSource: !value || value.indexOf('@') >= 0 ? [] : [
        `${value}@gmail.com`,
        `${value}@163.com`,
        `${value}@qq.com`,
      ],
    });
  }
  render() {
    
    const { current } = this.state;

    return (
//  falta asignar el origen de la revista     
      <div >
        <div class='redaccion'><center>  

        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {
            current < steps.length - 1
            && <Button type="primary" onClick={() => this.next()}>Siguiente</Button>
          }
          {
            current === steps.length - 1
            && <Button type="primary" onClick={() => message.success('Proceso Completado!')}>Guardar</Button>
          }
          {
            current > 0
            && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Anterior
            </Button>
            )
          }
        </div><p/>     
          </center>  
        </div>
      </div>
    )
  }
}