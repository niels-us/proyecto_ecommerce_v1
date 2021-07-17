import { URL_BACKEND } from "../../environments/environments";
import axios from "axios";
import { FIN_CARGANDO_OFERTA, INICIO_CARGANDO_OFERTA, SET_OFERTAS, SET_SELECCIONAR_OFERTA } from "../types/types";


export const setCargandoOfertas = () => {
  return { type: INICIO_CARGANDO_OFERTA };
};

export const setFinCargandoOfertas = () => {
  return { type: FIN_CARGANDO_OFERTA };
};

export const getOfertas = () => {
  return async (dispatch) => {
    dispatch(setCargandoOfertas());

    const endpoint = `${URL_BACKEND}/oferta`;
    const response = await axios.get(endpoint);

    dispatch({
      type: SET_OFERTAS,
      payload: response.data
    });
  };
};

export const seleccionarOfertaAction = (id) => {
  return {
    type: SET_SELECCIONAR_OFERTA,
    payload: id,
  };
};
