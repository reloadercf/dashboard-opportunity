import {createStore, combineReducers,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga';
import CONSTANTES from './Constantes';
import funcionPrimaria from './Sagas/Sagas';

const reducerArticulos = (state = {}, action) => {
  switch (action.type) {
    case CONSTANTES.AgregarArticulosDestacadosStore:
      return { ...state, articulosDestacados: action.articulos };
    case CONSTANTES.GetArticuloSlug:
      return { ...state, slug: action.slug };
    case CONSTANTES.GetArticuloDetail:
      return { ...state, articulo: action.articulo };
    default:
      return state;
  }
};


const sagaMiddleware = createSagaMiddleware();

const reducers=combineReducers({
  reducerArticulos
})

const store =createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(funcionPrimaria);
export default store


