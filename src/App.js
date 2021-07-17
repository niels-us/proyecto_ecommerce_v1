import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import TiendaRouter from "./modulos/Tienda/TiendaRouter";
import CarritoRouter from "./modulos/Carrito/CarritoRouter";
import AuthRouter from "./modulos/auth/AuthRouter";
import AdminRouter from "./modulos/admin/AdminRouter";
import PrivateRoute from "./PrivateRoute";
import { useDispatch } from "react-redux";
import { iniciarSesionLocalStorage } from "./redux/actions/authAction";

const App = () => {
  const dispatch = useDispatch();

  dispatch(iniciarSesionLocalStorage());

  return (
    <Router>
      <Switch>
        <Route path="/Tienda" component={TiendaRouter} />
        <Route path="/Carrito" component={CarritoRouter} />
        <Route path="/auth" component={AuthRouter} />
        <PrivateRoute path="/admin" component={AdminRouter} />
        <Redirect to="/Tienda/Tienda" />
      </Switch>
    </Router>
  );
};

export default App;
