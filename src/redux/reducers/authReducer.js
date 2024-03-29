import {
  FIN_CARGANDO_LOGIN,
  INICIO_CARGANDO_LOGIN,
  SET_CERRAR_LOGIN,
  SET_SUCCESS_LOGIN,
} from "../types/types";

const initialState = {
  autenticado: false,
  token: null,
  usu_nom: null,
  cargando: false,
  usu_tipo: null,
  usu_id: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case INICIO_CARGANDO_LOGIN:
      return {
        ...state,
        cargando: true,
      };
    case FIN_CARGANDO_LOGIN:
      return {
        ...state,
        cargando: false,
      };
    case SET_SUCCESS_LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    case SET_CERRAR_LOGIN:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
