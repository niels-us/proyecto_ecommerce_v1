import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import TiendaHeader from '../../Tienda/components/TiendaHeader';
import {getTipoPago} from '../../../redux/actions/tipopagoAction'
import CarritoResumen from '../components/CarritoResumen';
import { useDispatch, useSelector } from 'react-redux';


const CarritoTipoPago = () => {
    const dispatch = useDispatch();

    const carrito = useSelector((state) => state.carrito);

    const cliente = useSelector((state) => state.cliente);
    
    const entrega = useSelector((state) => state.entrega);

    const [datosTipoPago, setDatos] = useState({
        formapago: "",
        numeroTarjeta: 0,
        cvv: 0,
        tipodocumento: ""

    });

    const handleInputChange = (e) => {
        setDatos({
            ...datosTipoPago,
            [e.target.name]: e.target.value,

        });
    };

    const registrarTipoPago = (e) => {
        e.preventDefault();
        console.log(datosTipoPago);
        dispatch(getTipoPago(datosTipoPago));
    };



    return (
        <>

            <TiendaHeader />
            <div class="container">
                <div class="row ">
                    <h1 class="text-danger mt-4"><i class="fas fa-file-invoice-dollar"> Tipo de Pago</i></h1>
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
                                            <div class="card-body text-muted">
                                                <h5 class="card-title text-muted">Metodo de Pago</h5>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="formapago" id="flexRadioDefault1"
                                                        onChange={handleInputChange}
                                                        value="visa"
                                                        checked={datosTipoPago.formapago === 'visa'}


                                                    />
                                                    <label class="form-check-label" for="flexRadioDefault1">
                                                        Visa
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="formapago" id="flexRadioDefault2"
                                                        onChange={handleInputChange}
                                                        value="mastercard"
                                                        checked={datosTipoPago.formapago === 'mastercard'}
                                                    />
                                                    <label class="form-check-label" for="flexRadioDefault2">
                                                        Mastercard
                                                    </label>
                                                </div>

                                                <div class="form-group row">
                                                    <label for="inputText1"
                                                        class="col-sm-3 col-form-label  text-muted">N° Tarjeta</label>
                                                    <div class="col-sm-9">
                                                        <input type="number" class="form-control" id="inputText1"
                                                            onChange={handleInputChange}
                                                            name="numeroTarjeta"


                                                        />
                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <label for="inputText2"
                                                        class="col-sm-3 col-form-label  text-muted">CVV</label>
                                                    <div class="col-sm-5">
                                                        <input type="number" class="form-control" id="inputText2"
                                                            onChange={handleInputChange}
                                                            name="cvv"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-control mt-2">
                                                    <label class="form-check-label" for="exampleRadios2">
                                                        Tipo de Documento
                                                    </label>
                                                    <select class="form-select form-select-sm" aria-label=".form-select-sm example"
                                                        onChange={handleInputChange}
                                                        name="tipodocumento">
                                                        <option selected>Seleccionar..</option>
                                                        <option value="Boleta">Boleta</option>
                                                        <option value="Factura">Factura</option>

                                                    </select>
                                                </div>
                                                <div class="col-sm-12 mt-3">
                                                    <button type=""
                                                        class="btn btn-danger w-100 rounded-pill" onClick={registrarTipoPago} >Validar
                                                    </button>

                                                    <hr />
                                                    <NavLink to={"/Carrito/Pago"}>
                                                    <button type=""
                                                        class="btn btn-danger w-100 rounded-pill"  >IR
                                                    </button>
                                                    </NavLink>
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
                                                    <td class="pb-0">S/. {carrito.transporte}</td>
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
                               
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>

        </>
    )
}

export default CarritoTipoPago
