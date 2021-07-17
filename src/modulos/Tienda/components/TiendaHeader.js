import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import TiendaListaCategorias from './TiendaListaCategorias';

const TiendaHeader = () => {
    const { carrito } = useSelector((state) => state);
    const { categorias, cargandoCategorias } = useSelector((state) => state.categoria)



    return (
        <>
            <header className="p-3 mb-3 border-bottom ">
                <nav className=" navbar-expand-md  fixed-top bg-danger pt-2 pb-2">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                                <img src="https://th.bing.com/th/id/R.d7b678f617404881280fb7b3d855ff41?rik=DJ%2bSOV9hwPnyUw&pid=ImgRaw" width="70" alt="" />
                            </a>

                            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ">
                                <li><a href="#" className="nav-link px-2 link-dark text-white dropdown-toggle" id="dropdownUser1"
                                    data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
                                    <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                                        {

                                            categorias.map((objCategoria) => {
                                                return <TiendaListaCategorias objCategoria={objCategoria} key={objCategoria.id} />
                                            })
                                        }

                                    </ul>

                                </li>
                                <li><a href="#" class="nav-link px-2 link-dark text-white">Productos</a></li>
                                <li><a href="#" class="nav-link px-2 link-dark text-white">Ofertas</a></li>
                                <li><a href="#" class="nav-link px-2 link-dark text-white">Clientes</a></li>
                            </ul>

                            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                                <input type="search" class="form-control" placeholder="Buscar..." aria-label="Search" />

                            </form>

                            <div class="dropdown text-end">
                                <a href="#" class="d-block link-dark text-decoration-none" id="dropdownUser1" data-bs-toggle="dropdown"
                                    aria-expanded="false"></a>
                                <NavLink to="/Carrito/Carrito" className="iconosnavba position-relative" >
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
                                <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1"
                                    data-bs-toggle="dropdown" aria-expanded="false">

                                    <i class="fas fa-user-tie iconosnavbar"></i>
                                </a>


                                <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                                    <li><a class="dropdown-item" href="#">Iniciar sesión / Regístrate</a></li>
                                    <li><a class="dropdown-item" href="#">Perfil</a></li>
                                    <li><a class="dropdown-item" href="#">Pedidos</a></li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>

                                </ul>

                            </div>

                        </div>
                    </div>

                </nav>
            </header>
        </>
    )
}

export default TiendaHeader
