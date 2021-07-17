import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = (props) => {
  const { autenticado, cargando } = useSelector((state) => state.auth);

  if (cargando) {
    return <p>Cargando...</p>;
  } else {
    if (autenticado) {
      return <Route path={props.path} component={props.component} />;
    } else {
      return <Redirect to="/auth/login" />;
    }
  }
};

export default PrivateRoute;
