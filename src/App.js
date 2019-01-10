import React, { Component } from 'react';
import './App.css'
import RoutesLogout from './logout/RoutesLogout';
//import { connect } from 'react-redux';
import Dashboard from "./login/dashboard/Dashboard";
const login=true

class App extends Component {
  constructor(){
    super()
    this.state={
     
  }
  
  }
  render() {
    return (
      <div>
        {
          login? 
          <div>
            <Dashboard/>
          </div>:
          <RoutesLogout  aumentar={this.props.aumentar} noticias={this.state.noticias}/>
        }
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//    numero:state.reducerPrueba
// })

// const mapDispatchToProps = (dispatch) => {
//   return {
//     aumentar: () => {
//       dispatch({
//         type:'AUMENTAR_REDUCER_PRUEBA'
//       })
 
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App