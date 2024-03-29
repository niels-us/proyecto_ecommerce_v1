import React from 'react'
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import {  URL_BACKEND_VENTAS } from '../../../environments/environments';
import { eliminarTodolosproductos } from '../../../redux/actions/carritoAction';



const ModalBoleta = ({ mostrar, setMostrar }) => {
    const dispatch = useDispatch();
    const carrito = useSelector(state => state.carrito)
    const cliente = useSelector((state) => state.cliente);
    const entrega = useSelector((state) => state.entrega);
    const tipopago = useSelector((state) => state.tipopago);


    let objventa = {

        pedido_fecha: entrega.entregas.fecha,
        pedido_pecio: carrito.total+carrito.transporte,
        comprobante: tipopago.tipopagos.tipodocumento,
        tipo_pago:  tipopago.tipopagos.formapago,
        nombre: cliente.clientes.nombre,
        descripcion: carrito.productos.length,
        correo: cliente.clientes.email,
        direccion: entrega.entregas.direccion,
        pais: entrega.entregas.pais
        
    }
    console.log(objventa)

    const postVenta = async (objVenta) => {
        const response = await fetch(`${URL_BACKEND_VENTAS}/ventas`, {
            method: 'POST',
            body: JSON.stringify(objVenta),
            headers: {
                'Content-type': 'application/json'
            }
        });
    } 



    let objActual = carrito.productos.map((data) => {
        return data
    })
    console.log(objActual)


    const handlePagar = () => {
        postVenta(objventa)
        dispatch(eliminarTodolosproductos(objActual));
        // cerrar el modal
        setMostrar(false);
        // lanzar una notificación de éxito
        Swal.fire({
            icon: 'success',
            title: 'Éxito!',
            text: 'Pedido pagado con éxito'
            
        });
        

    }




    // console.log(carrito.total);

    return (
        <>
            <Modal size={'lg'} show={mostrar} onHide={() => setMostrar(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Facturación</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="col-md-12">
                            <div className="invoice">
                                <div className="invoice-company text-inverse f-w-600">
                                    <img src="https://th.bing.com/th/id/R.d7b678f617404881280fb7b3d855ff41?rik=DJ%2bSOV9hwPnyUw&pid=ImgRaw" width="70" alt="" /> SISTEMA ECOMMERCE.SA
                                </div>
                                <div className="invoice-header">
                                    <div className="invoice-from">
                                        <small>EMPRESA</small>
                                        <address className="m-t-5 m-b-5">
                                            <strong className="text-inverse">Twitter, Inc.</strong>
                                            <br />
                                            Street Address
                                            <br />
                                            City, Zip Code
                                            <br />
                                            Phone: (123) 456-7890
                                            <br />
                                            Fax: (123) 456-7890
                                        </address>
                                    </div>
                                    <div className="invoice-to">
                                        <small>CLIENTE</small>
                                        <address className="m-t-5 m-b-5">
                                            <strong className="text-inverse"></strong>
                                            <br />
                                            {entrega.entregas.direccion}
                                            <br />
                                            {entrega.entregas.provincia} -  {entrega.entregas.distrito}
                                            <br />
                                            {cliente.clientes.telefono}
                                            <br />
                                            {cliente.clientes.email}
                                        </address>
                                    </div>
                                    <div className="invoice-date">
                                        <small>Invoice / July period</small>
                                        <div className="date text-inverse m-t-5">August 3,2012</div>
                                        <div className="invoice-detail">
                                            #0000123DSS
                                            <br />
                                            Services Product
                                        </div>
                                    </div>
                                </div>
                                <div className="invoice-content">
                                    <div className="table-responsive">
                                        <table className="table table-invoice">
                                            <thead>
                                                <tr>
                                                    <th>Descripción</th>
                                                    <th className="text-center" width="10%">
                                                        P. Unitario
                                                    </th>
                                                    <th className="text-center" width="10%">
                                                        Cantidad
                                                    </th>
                                                    <th className="text-right" width="20%">
                                                        Sub Total
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {carrito.productos.map((objProducto) => {
                                                    return (
                                                        <tr>
                                                            <td>
                                                                <span className="text-inverse">
                                                                    {objProducto.descripcion}
                                                                </span>
                                                            </td>
                                                            <td className="text-center">
                                                                S/ {objProducto.precio}
                                                            </td>
                                                            <td className="text-center">
                                                                {objProducto.cantidad}
                                                            </td>
                                                            <td className="text-right">
                                                                S/{' '}
                                                                {+objProducto.precio *
                                                                    +objProducto.cantidad}
                                                            </td>
                                                        </tr>
                                                    );
                                                })


                                                }
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="invoice-price">
                                        <div className="invoice-price-left">
                                            <div className="invoice-price-row">
                                                <div className="sub-price">
                                                    <small>Sub Total</small>
                                                    <span className="text-inverse">S/. {carrito.total}</span>
                                                </div>
                                                <div className="sub-price">
                                                    <span className="text-inverse"> + </span>
                                                </div>
                                                <div className="sub-price">
                                                    <small>Costo de Envio</small>
                                                    <span className="text-inverse"> S/. {carrito.transporte}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="invoice-price-right">
                                            <small>TOTAL</small>{' '}
                                            <span className="f-w-600">S/.{carrito.total + carrito.transporte} </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="invoice-note">
                                    * Make all cheques payable to [Your Company Name]
                                    <br />
                                    * Payment is due within 30 days
                                    <br />* If you have any questions concerning this invoice,
                                    contact [Name, Phone Number, Email]
                                </div>

                                <div className="invoice-footer">
                                    <p className="text-center m-b-5 f-w-600">
                                        THANK YOU FOR YOUR BUSINESS
                                    </p>
                                    <p className="text-center">
                                        <span className="m-r-10">
                                            <i className="fa fa-fw fa-lg fa-globe"></i>{' '}
                                            matiasgallipoli.com
                                        </span>
                                        <span className="m-r-10">
                                            <i className="fa fa-fw fa-lg fa-phone-volume"></i>{' '}
                                            T:016-18192302
                                        </span>
                                        <span className="m-r-10">
                                            <i className="fa fa-fw fa-lg fa-envelope"></i>{' '}
                                            rtiemps@gmail.com
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="btn btn-success"
                        onClick={handlePagar}
                    // disabled={cargandoPago}
                    >
                        PAGAR
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalBoleta
