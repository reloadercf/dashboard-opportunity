import React, { Component } from 'react'
import "./style.css";
import { Form, Icon, Input, Button } from 'antd';
import Logo from '../../../assets/images/logotipos/mxopportunity.jpg'
const FormItem = Form.Item;

export default class componentName extends Component {
  render() {
    return (
      <div>
            <div className="Login">
            <img src={Logo} width='20%' height='5%' />
            <Button className="boton_alineacion" type="dashed" ghost>
                        <Icon type="left" />Regresar
                    </Button>

                <Form layout="inline">
                    <FormItem>
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    </FormItem>
                    <FormItem>

                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    </FormItem>
                    <FormItem>
                        <Button ghost>
                            Iniciar sesion
                        </Button>
                    </FormItem>
                </Form>
                
                </div>
      </div>
    )
  }
}