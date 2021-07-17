import React from 'react'
import PedidoPedido from './pages/PedidoPedido'
import { Switch, Route } from "react-router-dom";
const PedidoRouter = () => {
    return (
        <>
        <Switch>
                <Route path="/Pedido/Pedido" component={PedidoPedido} />
            </Switch>
        </>
    )
}

export default PedidoRouter
