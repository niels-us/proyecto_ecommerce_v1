import React from 'react'
import { NavLink } from "react-router-dom";

const CarritoHeader = () => {
    return (
        <>
            <div class="row">
          <div class="col-12">

            <h1 class="text-danger mt-4"><i class="fas fa-shopping-cart"> Mi carrito</i></h1>

            <NavLink to={"/Tienda/Tienda"}>
              <i class="fas fa-arrow-left"> <small> Seguir comprando </small> </i>
            </NavLink>



          </div>
        </div>
        <hr />
        </>
    )
}

export default CarritoHeader
