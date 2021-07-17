import { FIN_CARGANDO_CATEGORIA, INICIO_CARGANDO_CATEGORIA, SET_CATEGORIAS, SET_SELECCIONAR_CATEGORIA } from "../types/types";




const initialState = {
  categorias: [],
  cargandoCategoria: false,
  idCategoriaSeleccionado: -1,
};

export const categoriaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECCIONAR_CATEGORIA:
      return {
        ...state,
        idCategoriaSeleccionado: action.payload,
      };
    case INICIO_CARGANDO_CATEGORIA:
      return {
        ...state,
        cargandoCategoria: true,
      };
    case FIN_CARGANDO_CATEGORIA:
      return {
        ...state,
        cargandoCategoria: false,
      };
    case SET_CATEGORIAS:
      return {
        ...state,
        categorias: action.payload,
      };

    default:
      return state;
  }
};
