import React from 'react'
import { useDispatch } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import { getProductos } from '../../redux/actions/productoAction';
import CarritoCarrito from './pages/CarritoCarrito';
import CarritoEntrega from './pages/CarritoEntrega';
import CarritoPago from './pages/CarritoPago';
import CarritoRegistro from './pages/CarritoRegistro';


const CarritoRouter = () => {






    return (
        <>
            <Switch>

                <Route path="/Carrito/Carrito" component={CarritoCarrito} />
                <Route path="/Carrito/Registro" component={CarritoRegistro} />
                <Route path="/Carrito/Entrega" component={CarritoEntrega} />
                <Route path="/Carrito/Pago" component={CarritoPago} />
            </Switch>
        </>
    )
}

export default CarritoRouter
