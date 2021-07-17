import {
  FIN_CARGANDO_PRODCUTO,
  INICIO_CARGANDO_PRODUCTO,
  SET_PRODUCTOS,
  SET_SELECCIONAR_PRODUCTO,
} from "../types/types";

const initialState = {
  productos: [],
  cargandoProducto: false,
  idProductoSeleccionado: -1,
};

export const productoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECCIONAR_PRODUCTO:
      return {
        ...state,
        idProductoSeleccionado: action.payload,
      };
    case INICIO_CARGANDO_PRODUCTO:
      return {
        ...state,
        cargandoProducto: true,
      };
    case FIN_CARGANDO_PRODCUTO:
      return {
        ...state,
        cargandoProducto: false,
      };
    case SET_PRODUCTOS:
      return {
        ...state,
        productos: action.payload,
      };

    default:
      return state;
  }
};
