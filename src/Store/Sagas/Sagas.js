import {
    takeEvery, call, select, put,
  } from 'redux-saga/effects';
  import CONSTANTES from '../Constantes';
  import {
   actionAgregarArticulosDestacadosStore, actionGetArticuloDetail,
  } from '../Acciones';


  const ArticulosDestacados = () => fetch(`${CONSTANTES.URLAPI}/publicar/filtroespecialarticulo/?r=${CONSTANTES.EMPRESA}&portada=True`,
  {
    method: 'GET',
  }).then(response => response.json());


function* generadoraArticulosDestacados() {
  try {
    const articulosDestacados = yield call(ArticulosDestacados);
    yield put(actionAgregarArticulosDestacadosStore(articulosDestacados));

  } 
  catch (error) {
    console.log(error);  
  }
}

//FUNCION GENERADORA DE ARTICULO SLUG

const ConsultaArticuloSlug = slug => fetch(`${CONSTANTES.URLAPI}/publicar/filtroarticulos/?slug=${slug}`,
  {
    method: 'GET',
  }).then(response => response.json());


function* generadoraArticuloSlug() {
  try {
    const slug = yield select(state => state.reducerArticulos);
    const articuloCategoria = yield call(ConsultaArticuloSlug, slug.slug);
    yield put(actionGetArticuloDetail(articuloCategoria[0]));
    console.log(slug.slug);
    console.log(articuloCategoria);
  } catch (error) {
    console.log(error);
  }
}


export default function* funcionPrimaria() {
    yield takeEvery(CONSTANTES.GetArticulosDestacados, generadoraArticulosDestacados);
    yield takeEvery(CONSTANTES.GetArticuloSlug, generadoraArticuloSlug);
  }
  
