import {
  URL_BACKEND,
  URL_BACKEND_CATEGORIAS,
} from "../../environments/environments";
import axios from "axios";
import {
  FIN_CARGANDO_PRODCUTO,
  INICIO_CARGANDO_PRODUCTO,
  SET_PRODUCTOS,
  SET_SELECCIONAR_PRODUCTO,
} from "../types/types";

export const setCargandoProductos = () => {
  return { type: INICIO_CARGANDO_PRODUCTO };
};

export const setFinCargandoProductos = () => {
  return { type: FIN_CARGANDO_PRODCUTO };
};

export const getProductos = () => {
  return async (dispatch) => {
    dispatch(setCargandoProductos());

    const endpoint = `${URL_BACKEND_CATEGORIAS}/categorias`;
    const response = await axios.get(endpoint);

    dispatch({
      type: SET_PRODUCTOS,
      payload: response.data,
    });
  };
};

export const seleccionarProductoAction = (id) => {
  return {
    type: SET_SELECCIONAR_PRODUCTO,
    payload: id,
  };
};
