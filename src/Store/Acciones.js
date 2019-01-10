import CONSTANTES from './Constantes';



export const actionGetArticulosDestacados= () =>({
    type: CONSTANTES.GetArticulosDestacados,
})
export const actionAgregarArticulosDestacadosStore= articulos=>({
    type: CONSTANTES.AgregarArticulosDestacadosStore,
    articulos
})

export const actionGetArticuloSlug = slug => ({
    type: CONSTANTES.GetArticuloSlug,
    slug,
  });
    
export const actionGetArticuloDetail = articulo => ({
    type: CONSTANTES.GetArticuloDetail,
    articulo,
});

