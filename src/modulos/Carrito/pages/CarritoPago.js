import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import CarritoResumen from '../components/CarritoResumen';
import TiendaHeader from '../../Tienda/components/TiendaHeader';
import ModalBoleta from "../components/ModalBoleta";
import { useState } from 'react';


const CarritoPago = () => {

    const carrito = useSelector((state) => state.carrito);
    const cliente = useSelector((state) => state.cliente);
    const entrega = useSelector((state) => state.entrega);

    const tipopago = useSelector((state) => state.tipopago)




    const [mostrar, setMostrar] = useState(false);
    return (
        <>
            <TiendaHeader />
            <div class="container">
                <div class="row ">
                    <h1 class="text-danger mt-4"><i class="fas fa-file-invoice-dollar"> Pago</i></h1>
                    <div class="col-7">
                        <div class="row ">

                            <div class="col-12">

                            </div>
                            <div class="row ">
                                <div class="col-12">
                                    <div class="w-75  justify-content-center text-light">
                                        <div class="card p-3 shadow" style={{ width: '500px' }} >
                                            <div class="card-header">
                                                <div class="row">
                                                    <div class="col-9">
                                                        <h5 class="card-title text-muted">Registro</h5>
                                                        <h6 class="card-subtitle mb-2 text-muted">{cliente.clientes.email}</h6>
                                                        <h6 class="card-subtitle mb-2 text-muted">{cliente.clientes.nombre}</h6>
                                                        <h6 class="card-subtitle mb-2 text-muted">{cliente.clientes.telefono}</h6>
                                                    </div>
                                                    <div class="col-3">
                                                        <NavLink to={"/Carrito/Registro"}>
                                                            <button type="button" class="btn btn-danger rounded-pill">Editar</button>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-header">
                                                <div class="row">
                                                    <div class="col-9">
                                                        <h5 class="card-title text-muted">Datos para la entrega</h5>
                                                        <h6 class="card-subtitle mb-2 text-muted">{entrega.entregas.provincia} - {entrega.entregas.distrito} </h6>
                                                        <h6 class="card-subtitle mb-2 text-muted">{entrega.entregas.direccion}</h6>
                                                        <h6 class="card-subtitle mb-2 text-muted">{entrega.entregas.fecha} </h6>
                                                    </div>
                                                    <div class="col-3">
                                                        <NavLink to={"/Carrito/Entrega"}>
                                                            <button type="button" class="btn btn-danger rounded-pill">Editar</button>

                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-header">
                                                <div class="row">
                                                    <div class="col-9">
                                                        <h5 class="card-title text-muted">Datos Tipo de Pago</h5>
                                                        <h6 class="card-subtitle mb-2 text-muted">{tipopago.tipopagos.formapago} </h6>
                                                        <h6 class="card-subtitle mb-2 text-muted">{tipopago.tipopagos.tipodocumento}</h6>
                                                        <h6 class="card-subtitle mb-2 text-muted"></h6>
                                                    </div>
                                                    <div class="col-3">
                                                        <NavLink to={"/Carrito/TipoPago"}>
                                                            <button type="button" class="btn btn-danger rounded-pill">Editar</button>

                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>

                                            
                                            <div class="card-footer">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <h5 class="card-title text-warning">Tu pago Total es S/ {carrito.total + carrito.transporte} </h5>
                                                        <h6 class="card-subtitle mb-2 text-info">Para finalizar tu compra, haz
                                                            clic en el botón "Ir a Pagar".
                                                            Se abrirá la página pagoweb.pe donde podrás realizar tu pago de
                                                            manera segura.</h6>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="row">
                            <div class="col-12">
                                <ul class="list-group shadow">
                                    <li class="list-group-item text-center text-success">
                                        <h5>Resumen de la compra</h5>
                                    </li>
                                    {
                                        carrito.productos.map((objProducto) => {
                                            return <CarritoResumen objProducto={objProducto} key={objProducto.id} />
                                        })

                                    }
                                </ul>
                            </div>
                        </div>
                        <div class="row my-2">
                            <div class="col-12">
                                <div class="border border-muted shadow">
                                    <div class="m-2">
                                        <table class="table table-borderless">
                                            <tbody class="tbody-resumen">
                                                <tr>
                                                    <td class="pb-0">Subtotal</td>
                                                    <td class="pb-0">S/.{carrito.total} </td>
                                                </tr>
                                                <tr>
                                                    <td class="pb-0">Costo del envío</td>
                                                    <td class="pb-0">S/.{carrito.transporte}</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2" class="py-0">
                                                        <hr />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="py-0">Total</td>
                                                    <td class="py-0">S/. {carrito.total + carrito.transporte} </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="my-2">

                                    <button type="button" class="btn btn-danger w-100 rounded-pill mb-2" onClick={() => {
                                        setMostrar(true);
                                    }
                                    }
                                    >

                                        Ir a Pagar</button>
                                    {/* <NavLink to={"/"}> */}
                                    <a href="/" >
                                        <button type="button" class="btn btn-danger w-100 rounded-pill">Cancelar</button>
                                    </a>
                                    {/* </NavLink> */}




                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalBoleta
                    mostrar={mostrar}
                    setMostrar={setMostrar}
                // datos={datos}
                />
            </div>
        </>
    )
}

export default CarritoPago
