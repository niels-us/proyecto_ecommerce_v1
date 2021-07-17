import {
  FIN_CARGANDO_VENTAS,
  INICIO_CARGANDO_VENTAS,
  SET_VENTAS,
} from "../types/types";

const initialState = {
  pedido_ventas: [],
  cargando_ventas: false,
};

export const ventasReducer = (state = initialState, action) => {
  switch (action.type) {
    case INICIO_CARGANDO_VENTAS:
      return {
        ...state,
        cargando_ventas: true,
      };
    case FIN_CARGANDO_VENTAS:
      return {
        ...state,
        cargando_ventas: false,
      };
    case SET_VENTAS:
      return {
        ...state,
        pedido_ventas: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
