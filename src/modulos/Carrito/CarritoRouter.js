import React from 'react'

import { Switch, Route } from "react-router-dom";

import CarritoCarrito from './pages/CarritoCarrito';
import CarritoEntrega from './pages/CarritoEntrega';
import CarritoPago from './pages/CarritoPago';
import CarritoRegistro from './pages/CarritoRegistro';
import CarritoTipoPago from './pages/CarritoTipoPago';


const CarritoRouter = () => {

    return (
        <>
            <Switch>

                <Route path="/Carrito/Carrito" component={CarritoCarrito} />
                <Route path="/Carrito/Registro" component={CarritoRegistro} />
                <Route path="/Carrito/Entrega" component={CarritoEntrega} />
                <Route path="/Carrito/TipoPago" component={CarritoTipoPago} />
                <Route path="/Carrito/Pago" component={CarritoPago} />
            </Switch>
        </>
    )
}

export default CarritoRouter
