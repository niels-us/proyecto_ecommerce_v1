import React from 'react'

const CarritoResumen = ({objProducto}) => {
    return (
        <>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                  <img src={objProducto.imagen} alt="" width="50" />  
                <small> * {objProducto.descripcion} </small>
                <span>  {objProducto.cantidad}</span>
            </li>
            
        </>
    )
}

export default CarritoResumen
