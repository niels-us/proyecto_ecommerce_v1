import React, { useState } from "react";
import { useSelector } from "react-redux";
import TiendaHeader from "../../Tienda/components/TiendaHeader";
import CarritoProducto from "../components/CarritoProducto";
import { NavLink } from "react-router-dom";


import CarritoHeader from "../components/CarritoHeader";

const CarritoCarrito = () => {
  const carrito = useSelector((state) => state.carrito);

  // const [mostrar, setMostrar] = useState(false);


  return (
    <>
      <TiendaHeader />


      <div class="container">
        <CarritoHeader />
        <div class="row">
          <div class="col-8">


            <ul class="list-group mb-3">
              {
                carrito.productos.map((objProducto) => {

                  return <CarritoProducto objProducto={objProducto} />

                })


              }

            </ul>

          </div>
          <div class="col-4">
            <div class="border border-muted shadow">
              <div class="m-2">
                <table class="table table-borderless">
                  <tbody class="tbody-resumen">
                    <tr>
                      <td class="pb-0">Subtotal</td>
                      <td class="pb-0">S/. {carrito.total} </td>
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
                      <td class="py-0">S/. {carrito.total+carrito.transporte} </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="m-2">
              <NavLink to={"/Carrito/Registro"}>
                <button type="button" class="btn btn-danger w-100 rounded-pill">Continuar</button>
              </NavLink>
            </div>
          </div>
        </div>

      </div>


    </>
  );
};

export default CarritoCarrito;
