import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getCategorias } from "../../../redux/actions/categoriaAction";

const TiendaHeader = (props) => {
  const { carrito } = useSelector((state) => state);
  const { productos } = useSelector((state) => state.producto);

  const dispatch = useDispatch();
  const handleCategoria = (id) => {
    dispatch(getCategorias(id))
  };

  const handleProductos=()=>{
    dispatch(getCategorias(null))
  }

  return (
    <>
      <header className="p-3 mb-3 border-bottom ">
        <nav className=" navbar-expand-md  fixed-top bg-danger pt-2 pb-2">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <NavLink
                to="/"
                className="d-flex align-items-center me-2 mb-lg-0 text-dark text-decoration-none"
              >
                <img
                  src="https://th.bing.com/th/id/R.d7b678f617404881280fb7b3d855ff41?rik=DJ%2bSOV9hwPnyUw&pid=ImgRaw"
                  width="60"
                  alt=""
                />
              </NavLink>

              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ">
                <li class="nav-item dropdown">
                  <NavLink
                    class="nav-link dropdown-toggle text-light"
                    to="#"
                    id="navbarScrollingDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categorias
                  </NavLink>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarScrollingDropdown"
                  >
                    {productos.map((objCategoria) => {
                      return (
                        <li className="bg-light" key={objCategoria.id}>
                          <NavLink
                            className="dropdown-item"
                            activeClassName={"text-danger"}
                            to="#"
                            onClick={() => {
                              handleCategoria(objCategoria.id);
                            }}
                          >
                            {objCategoria.categoria}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </li>

                <li>
                  <NavLink
                    to="/Tienda/Tienda"
                    class="nav-link px-2 link-dark text-white"
                    onClick={() => {
                      handleProductos('LimpiarCategorias');
                    }}
                  >
                    Productos
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" class="nav-link px-2 link-dark text-white">
                    Ofertas
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" class="nav-link px-2 link-dark text-white">
                    Clientes
                  </NavLink>
                </li>
              </ul>

              <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input
                  type="search"
                  class="form-control"
                  placeholder="Buscar..."
                  aria-label="Search"
                />
              </form>

              <div class="dropdown text-end">
                <NavLink
                  to="#"
                  class="d-block link-dark text-decoration-none"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></NavLink>
                <NavLink
                  to="/Carrito/Carrito"
                  className="iconosnavba position-relative"
                >
                  <i class="fas fa-cart-plus iconosnavbar"></i>

                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                    {carrito.productos.length}
                  </span>
                </NavLink>

                {/* <button type="button" class="btn btn-primary position-relative">
                                    Inbox
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        99+
                                        <span class="visually-hidden">unread messages</span>
                                    </span>
                                </button> */}
              </div>

              <div class="dropdown text-end">
                <NavLink
                  to="#"
                  class="d-block link-dark text-decoration-none dropdown-toggle"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fas fa-user-tie iconosnavbar"></i>
                </NavLink>

                <ul
                  class="dropdown-menu text-small"
                  aria-labelledby="dropdownUser1"
                >
                  <li>
                    <NavLink class="dropdown-item" to="#">
                      Iniciar sesión / Regístrate
                    </NavLink>
                  </li>
                  <li>
                    <NavLink class="dropdown-item" to="#">
                      Perfil
                    </NavLink>
                  </li>
                  <li>
                    <NavLink class="dropdown-item" to="#">
                      Pedidos
                    </NavLink>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink class="dropdown-item" to="#">
                      Cerrar sesión
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default TiendaHeader;
