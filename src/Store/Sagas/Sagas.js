import {
    takeEvery, call, select, put,
  } from 'redux-saga/effects';
  import CONSTANTES from '../Constantes';
  import {
    actionGetArticulosDestacados,
  } from '../Acciones';


  const ArticulosDestacados = () => fetch(`${CONSTANTES.URLAPI}/publicar/filtroespecialarticulo/?r=${CONSTANTES.EMPRESA}&portada=True`,
  {
    method: 'GET',
  }).then(response => response.json());


function* generadoraArticulosDestacados() {
  try {
    const articulosDestacados = yield call(ArticulosDestacados);
    yield put(actionGetArticulosDestacados(articulosDestacados));

  } 
  catch (error) {
    console.log(error);
  }
}


  export default function* funcionPrimaria() {
    yield takeEvery(CONSTANTES.GetArticulosDestacados, generadoraArticulosDestacados);
  }
  