import { FIN_CARGANDO_OFERTA, INICIO_CARGANDO_OFERTA, SET_OFERTAS, SET_SELECCIONAR_OFERTA } from "../types/types";

  
  const initialState = {
    ofertas: [],
    cargandoOferta: false,
    idOfertaSeleccionado: -1,
  };
  
  export const ofertaReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_SELECCIONAR_OFERTA:
        return {
          ...state,
          idOfertaSeleccionado: action.payload,
        };
      case INICIO_CARGANDO_OFERTA:
        return {
          ...state,
          cargandoOferta: true
        };
      case FIN_CARGANDO_OFERTA:
        return {
          ...state,
          cargandoOferta: false,
        };
      case SET_OFERTAS:
        return {
          ...state,
         ofertas: action.payload
        };
  
      default:
        return state;
    }
  };