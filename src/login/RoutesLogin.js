import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Redactar from "./dashboard/main/layouts/redactar/Redactar";
import Main from "./dashboard/main/Main";
import Publicado from "./dashboard/main/layouts/publicado/Publicado";
import Borrador from "./dashboard/main/layouts/borrador/Borrador";
import Patrocinadores from "./dashboard/main/layouts/patrocinadores/Patrocinadores";
import Categorias from "./dashboard/main/layouts/categorias/Categorias";
import Papeleta from "./dashboard/main/layouts/papeleta/Papeleta";
import Viewpatrocinador from './dashboard/main/layouts/patrocinadores/view/Viewpatrocinador'
import New from './dashboard/main/layouts/patrocinadores/new/New'

class RoutesLogin extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/"  render={props =>(<Main {...props}  />)}/>
                <Route exact path="/redactar"  render={props =>(<Redactar {...props}  />)}/>
                <Route exact path="/Publicado"  render={props =>(<Publicado {...props}  />)}/>
                <Route exact path="/Borrador"  render={props =>(<Borrador {...props}  />)}/>
                <Route exact path="/Patrocinadores"  render={props =>(<Patrocinadores {...props}  />)}/>
                <Route exact path="/Categorias"  render={props =>(<Categorias {...props}  />)}/>
                <Route exact path="/Papeleta"  render={props =>(<Papeleta {...props}  />)}/>
                <Route exact path="/Verpatrocinador"  render={props =>(<Viewpatrocinador {...props}  />)}/>
                <Route exact path="/Registrarpatrocinador"  render={props =>(<New {...props}  />)}/>
            </Switch>
        );
    }
}

export default RoutesLogin;