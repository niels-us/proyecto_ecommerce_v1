import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { cerrarSesionAction } from "../../../redux/actions/authAction";

const AdminHeader = (props) => {
  const goToTienda = () => {
    props.history.push("/Tienda/Tienda");
  };

  const dispatch = useDispatch();
  const cerrarSesion = () => {
    dispatch(cerrarSesionAction());
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <div className="container-fluid ">
          <img
            className="me-5"
            src="https://via.placeholder.com/100x38"
            alt=""
          />
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link rounded-pill text-light"
                aria-current="page"
                to="/admin/info"
                activeClassName={"active bg-dark"}
              >
                Ver Grafico
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link rounded-pill text-light"
                to="/admin/table"
                activeClassName={"active bg-dark"}
              >
                Ver Tabla
              </NavLink>
            </li>
          </ul>

          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarSupportedContent"
          >
            <form className="inline">
              <button
                className="btn btn-success mx-4"
                type="button"
                onClick={goToTienda}
              >
                Ir a Tienda
              </button>
              <button
                className="btn btn-light"
                type="button"
                onClick={cerrarSesion}
              >
                Cerrar Sesion
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(AdminHeader);
