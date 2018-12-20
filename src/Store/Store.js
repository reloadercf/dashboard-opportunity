import {createStore, combineReducers, applyMiddleware} from 'redux'
import Constantes from './Constantes'


const reducerPrueba =(state=[0], action)=>{
  switch (action.type) {
    case 'AUMENTAR_REDUCER_PRUEBA':
      return [...state, "hola"]
    default:
      return state
  }
}



const reducers=combineReducers({
  reducerPrueba,
 
})

const store =createStore(reducers)

export default store


