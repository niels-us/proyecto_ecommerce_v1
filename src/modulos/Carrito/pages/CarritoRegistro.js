import React from 'react'
import { useSelector } from 'react-redux'
import TiendaHeader from '../../Tienda/components/TiendaHeader'

import CarritoResumen from '../components/CarritoResumen'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { useDispatch } from 'react-redux';
import { getRegistro } from '../../../redux/actions/registroAction'


const CarritoRegistro = () => {
    const dispatch = useDispatch();
    const carrito = useSelector((state) => state.carrito);


    
   const  [datosCliente, setDatos] = useState({
        nombre: "",
        apellidos: "",
        dni: 0,
        email: "",
        telefono: 0,
    });
    
    const handleInputChange = (e) => {
        setDatos({
            ...datosCliente,
            [e.target.name]: e.target.value,
        });
    };

 

    console.log(datosCliente)

    const registrardatos = (e) => {
        e.preventDefault();
        console.log(datosCliente)
        dispatch(getRegistro(datosCliente));  
         
    };

    


    return (
        <>
            <TiendaHeader />

            <div class="container">
                <div class="row ">
                    <h1 class="text-danger mt-4"><i class="fas fa-edit"> Registro</i></h1>
                    <div class="col-7">
                        <div class="row ">

                            <div class="col-12">

                            </div>
                            <div class="row ">
                                <div class="col-12">
                                    <div class="w-75  justify-content-center text-light">
                                        <div class="card p-3 shadow" style={{ width: '500px' }} >
                                            <div class="card-body">
                                                <h5 class="card-title text-muted">Registro</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">Solicitamos únicamente la información
                                                    esencial para la finalización de
                                                    la compra.</h6>
                                                <p class="card-text text-muted">Todos los campos obligatorios</p>
                                                <form>

                                                    <div class="form-group row">
                                                        <label for="inputText1"
                                                            class="col-sm-3 col-form-label  text-muted">Nombre</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" class="form-control" id="inputText1"
                                                                onChange={handleInputChange}
                                                                name="nombre"
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="inputText2"
                                                            class="col-sm-3 col-form-label  text-muted">Apellidos</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" class="form-control" id="inputText2"
                                                                onChange={handleInputChange}
                                                                name="nombre"
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="inputNumber3"
                                                            class="col-sm-3 col-form-label  text-muted">DNI</label>
                                                        <div class="col-sm-9">
                                                            <input type="number" class="form-control" id="inputNumber3"
                                                                onChange={handleInputChange}
                                                                name="dni"
                                                                
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label for="inputEmail3"
                                                            class="col-sm-3 col-form-label  text-muted">Correo</label>
                                                        <div class="col-sm-9">
                                                            <input type="email" class="form-control" id="inputEmail3"
                                                                onChange={handleInputChange}
                                                                name="email"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label for="inputNumber3"
                                                            class="col-sm-3 col-form-label  text-muted">Telefono</label>
                                                        <div class="col-sm-9">
                                                            <input type="number" class="form-control" id="inputNumber3"
                                                                onChange={handleInputChange}
                                                                name="telefono"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <div class="col-sm-12 mt-3">
                                                            <button type=""
                                                                class="btn btn-danger w-100 rounded-pill" onClick={registrardatos}>Validar
                                                                </button>
                                                                <hr />
                                                            <Link to={"/Carrito/Entrega"}>
                                                                <button type=""
                                                                    class="btn btn-danger w-100 rounded-pill"  >IR</button>
                                                            </Link>

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
                                                    <td class="pb-0">S/. {carrito.transporte} </td>
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

export default CarritoRegistro
