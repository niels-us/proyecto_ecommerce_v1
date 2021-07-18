import { URL_BACKEND_CATEGORIAS } from "../../environments/environments";
import axios from "axios";
import {
  FIN_CARGANDO_CATEGORIA,
  INICIO_CARGANDO_CATEGORIA,
  SET_CATEGORIAS,
  SET_SELECCIONAR_CATEGORIA,
} from "../types/types";

export const setCargandoCategorias = () => {
  return { type: INICIO_CARGANDO_CATEGORIA };
};

export const setFinCargandoCategorias = () => {
  return { type: FIN_CARGANDO_CATEGORIA };
};

export const getCategorias = (id) => {
  return async (dispatch) => {
    dispatch(setCargandoCategorias());

    if (id > 0) {
      const endpoint = `${URL_BACKEND_CATEGORIAS}/categorias/${id}/productos`;
      const response = await axios.get(endpoint);
      dispatch({
        type: SET_CATEGORIAS,
        payload: response.data,
      });
    }else{
        dispatch({
            type: SET_CATEGORIAS,
            payload: [],
          });
    }
  };
};

export const seleccionarCategoriaAction = (id) => {
  return {
    type: SET_SELECCIONAR_CATEGORIA,
    payload: id,
  };
};
