import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { ofertaReducer } from "../reducers/ofertaReducer";
import { productoReducer } from "../reducers/productoReducer";
import { carritoReducer } from "../reducers/carritoReducer";
import { authReducer } from "../reducers/authReducer";
import { ventasReducer } from "../reducers/ventasReducer";
import { categoriaReducer } from "../reducers/categoriaReducer";
import { registroReducer } from "../reducers/registroReducer";
import {entregaReducer} from "../reducers/entregaReducer";
import {  tipopagoReducer } from "../reducers/tipopagoReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  producto: productoReducer,
  oferta: ofertaReducer,
  carrito:carritoReducer,
  categoria:categoriaReducer,
  cliente:registroReducer,
  entrega: entregaReducer,
  auth: authReducer,
  ventas: ventasReducer,
  tipopago:tipopagoReducer
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
