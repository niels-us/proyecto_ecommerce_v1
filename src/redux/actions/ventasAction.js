import axios from "axios";
import { URL_BACKEND_VENTAS } from "../../environments/environments";
import {
  FIN_CARGANDO_VENTAS,
  INICIO_CARGANDO_VENTAS,
  SET_VENTAS,
} from "../types/types";

const inicio_Cargando_Ventas = () => {
  return { type: INICIO_CARGANDO_VENTAS };
};

const fin_Cargando_Ventas = () => {
  return { type: FIN_CARGANDO_VENTAS };
};

export const getVentas = () => {
  return async (dispatch) => {
    dispatch(inicio_Cargando_Ventas());

    const endpoint = `${URL_BACKEND_VENTAS}/ventas`;
    const response = await axios.get(endpoint);

    dispatch({
      type: SET_VENTAS,
      payload: response.data,
    });

    dispatch(fin_Cargando_Ventas());
  };
};
