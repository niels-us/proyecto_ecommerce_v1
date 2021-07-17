import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import CarritoResumen from '../components/CarritoResumen';
import TiendaHeader from '../../Tienda/components/TiendaHeader';
import { NavLink } from 'react-router-dom';
import CarritoRegistro from './CarritoRegistro';

const CarritoEntrega = () => {
    const carrito = useSelector((state) => state.carrito);

    const cliente = useSelector((state) => state.cliente);
    console.log(cliente.clientes)

    const [datosEntrega, setDatos] = useState({
        provincia: "",
        distrito: "",
        direccion: "",
        fecha: ""
       
    });

    const handleInputChange = (e) => {
        setDatos({
            ...datosEntrega,
            [e.target.name]: e.target.value,
        });
    };

    const registrarEntrega = (e) => {
        e.preventDefault();
        console.log(datosEntrega);
    };


    return (
        <>
            <TiendaHeader />
            <div class="container">
                <div class="row ">
                    <h1 class="text-danger mt-4"><i class="fas fa-edit"> Entrega</i></h1>
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
                                                        <h6 class="card-subtitle mb-2 text-muted">{cliente.clientes.email} </h6>
                                                        <h6 class="card-subtitle mb-2 text-muted">{cliente.clientes.nombre}</h6>
                                                        <h6 class="card-subtitle mb-2 text-muted">{cliente.clientes.telefono}</h6>
                                                    </div>
                                                    <div class="col-3">
                                                        <NavLink to={"/Carrito/Registro"}>
                                                            <button type="button" class="btn btn-danger">Editar</button>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="card-body">
                                                <h5 class="card-title text-muted">Entrega</h5>

                                                <form>

                                                    <div class="form-group row">
                                                        <label for="inputText1"
                                                            class="col-sm-3 col-form-label  text-muted">Provincia</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" class="form-control" id="inputText1" 
                                                                 onChange={handleInputChange}
                                                                name="provincia"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="inputText2"
                                                            class="col-sm-3 col-form-label  text-muted">Distrito</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" class="form-control" id="inputText2"
                                                             onChange={handleInputChange}
                                                                name="distrito"
                                                             />
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="inputNumber3"
                                                            class="col-sm-3 col-form-label  text-muted">Direccion</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" class="form-control" id="inputNumber3" 
                                                             onChange={handleInputChange}
                                                                name="direccion"

                                                            
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label for="inputEmail3"
                                                            class="col-sm-3 col-form-label  text-muted">Fecha</label>
                                                        <div class="col-sm-9">
                                                            <input type="datetime-local" class="form-control" id="inputEmail3" 
                                                                 onChange={handleInputChange}
                                                                name="fecha"
                                                            />
                                                        </div>
                                                    </div>


                                                    <div class="form-group row">
                                                        <div class="col-sm-12 mt-3">
                                                        <button type=""
                                                                class="btn btn-danger w-100 rounded-pill" onClick={registrarEntrega} >Validar
                                                                </button>
                                                                <hr />
                                                            <NavLink to={"/Carrito/Pago"}>
                                                                <button type=""
                                                                    class="btn btn-danger w-100 rounded-pill">IR</button>
                                                            </NavLink>


                                                        </div>
                                                    </div>
                                                </form>

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
                                                    <td class="pb-0">S/. 25</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2" class="py-0">
                                                        <hr />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="py-0">Total</td>
                                                    <td class="py-0">S/. {carrito.total + 25} </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarritoEntrega
