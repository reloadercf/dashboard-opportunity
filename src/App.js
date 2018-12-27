import React, { Component } from 'react';
import './App.css'
import RoutesLogout from './logout/RoutesLogout';
//import { connect } from 'react-redux';
import Dashboard from "./login/dashboard/Dashboard";
const login=false

class App extends Component {

  // componentDidMount(){
    
  // }

  render() {
    console.log(this.props.numero)
    return (
      <div>
        {
          login? 
          <div>
            <Dashboard/>
          </div>:
          
          <RoutesLogout  aumentar={this.props.aumentar}/>
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