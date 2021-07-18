import React from "react";
import { Switch, Route } from "react-router-dom";
import TiendaTienda from "./pages/TiendaTienda";
import { useDispatch } from "react-redux";
import { getProductos } from "../../redux/actions/productoAction";
import { getOfertas } from "../../redux/actions/ofertaAction";
import { getCategorias } from "../../redux/actions/categoriaAction";

const PosRouter = () => {
  const dispatch = useDispatch();

  dispatch(getOfertas());
  dispatch(getProductos());
  dispatch(getCategorias());

  return (
    <>
      <Switch>
        <Route path="/Tienda/Tienda" component={TiendaTienda} />
      </Switch>
    </>
  );
};

export default PosRouter;
