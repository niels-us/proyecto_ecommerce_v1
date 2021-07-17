import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { eliminarProductoAlCarrito, restarProductoAlCarrito, sumarProductoAlCarrito } from "../../../redux/actions/carritoAction";



const CarritoProducto = ({ objProducto }) => {

  console.log(objProducto)
  const dispatch = useDispatch();

  const eliminarProducto = () => {
    dispatch(eliminarProductoAlCarrito(objProducto));
  };
  const restarProducto = () => {
    dispatch(restarProductoAlCarrito(objProducto));
  };
  const sumarProducto = () => {
    dispatch(sumarProductoAlCarrito(objProducto));
  };

  return (
    <>

      <li class="list-group-item d-flex justify-content-between lh-sm ">
        <div>
          <h6 class="my-0">{objProducto.descripcion} </h6>

        </div>
        <div>
          <i class="fas fa-minus-square" onClick={restarProducto}></i>
          <small class="text-muted">   {objProducto.cantidad}   </small>
          <i  class="fas fa-plus-square" onClick={sumarProducto}></i>
        </div>
        <span class="text-muted">S/. {objProducto.precio * objProducto.cantidad} </span>
        <div>
          <i class="far fa-trash-alt" onClick={eliminarProducto}></i>
        </div>
      </li>

      {/* <div className="card mb-3 shadow border-0">
      <div className="card-body  d-flex justify-content-between">
     
        <div className="d-flex align-items-center justify-content-center">
          <h2></h2>
          <p><strong>{objProducto.descripcion.substring(0, 15)}...</strong></p>
        </div>

        <div className="d-flex align-items-center justify-content-center">
          <button className="btn btn-primary" onClick={restarProducto}>
            -
          </button>
          <strong style={{ padding: "5px" }}>{objProducto.cantidad}</strong>
          <button className="btn btn-warning" onClick={sumarProducto}>
            +
          </button>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <strong>
            S/. {(objProducto.cantidad * objProducto.precio).toFixed(2)}
          </strong>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <button className="btn btn-danger" onClick={eliminarProducto}>
          <i class="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div> */}



    </>
  )
};

export default CarritoProducto;
