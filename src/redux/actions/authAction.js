import axios from "axios";
import { URL_BACKEND_LOGIN } from "../../environments/environments";
import {
  FIN_CARGANDO_LOGIN,
  INICIO_CARGANDO_LOGIN,
  SET_SUCCESS_LOGIN,
} from "../types/types";

const inicioCargandoLogin = () => {
  return {
    type: INICIO_CARGANDO_LOGIN,
  };
};
const finCargandoLogin = () => {
  return {
    type: FIN_CARGANDO_LOGIN,
  };
};

export const iniciarSesionAction = (correo, password) => {
  return async (dispatch) => {
    dispatch(inicioCargandoLogin());
    const endpoint = `${URL_BACKEND_LOGIN}/login`;
    const response = await axios.post(
      endpoint,
      JSON.stringify({ correo: correo, password: password }),
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      let { token } = response.data;
      localStorage.setItem("token", token);
      let payload = token.split(".")[1];
      let payloadDecoded = atob(payload);
      let payloadJSON = JSON.parse(payloadDecoded);
      dispatch({
        type: SET_SUCCESS_LOGIN,
        payload: {
          autenticado: true,
          usu_nom: payloadJSON.usu_nom,
          usu_id: payloadJSON.usu_id,
          usu_tipo: payloadJSON.usu_tipo,
          token: token,
        },
      });
    }

    dispatch(finCargandoLogin());
  };
};

export const iniciarSesionLocalStorage = () => {
  return async (dispatch) => {
    dispatch(inicioCargandoLogin());
    let token = localStorage.getItem("token");
    try {
      if (token) {
        const endpoint = `${URL_BACKEND_LOGIN}/verificar`;
        const response = await axios.post(endpoint, null, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        if (response.data.ok) {
          let payload = token.split(".")[1];
          let payloadDecoded = atob(payload);
          let payloadJSON = JSON.parse(payloadDecoded);
          dispatch({
            type: SET_SUCCESS_LOGIN,
            payload: {
              autenticado: true,
              usu_nom: payloadJSON.usu_id,
              usu_id: payloadJSON.usu_id,
              usu_tipo: payloadJSON.usu_tipo,
              token: token,
            },
          });
          dispatch(finCargandoLogin());
        } else {
          dispatch(finCargandoLogin());
        }
      } else {
        dispatch(finCargandoLogin());
      }
    } catch (error) {
      localStorage.removeItem("token");
      dispatch(finCargandoLogin());
    }
  };
};

export const cerrarSesionAction = () => {
  return async (dispatch) => {
    dispatch(inicioCargandoLogin());
    dispatch({
      type: SET_SUCCESS_LOGIN,
      payload: {
        autenticado: false,
        token: null,
        usu_nom: null,
        cargando: false,
        usu_tipo: null,
        usu_id: null,
      },
    });
    localStorage.removeItem("token");
    dispatch(finCargandoLogin());
  };
};
