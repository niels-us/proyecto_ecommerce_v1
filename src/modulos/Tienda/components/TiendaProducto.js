import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TiendaVerProducto from './TiendaVerProducto';
import { agregarProductoAlCarrito } from '../../../redux/actions/carritoAction';


const TiendaProducto = ({ objProducto }) => {
    const dispatch = useDispatch();

	const agregarProducto = () => {
		dispatch(agregarProductoAlCarrito(objProducto));
	};

    const [mostrar, setMostrar] = useState(false);

    return (
        <>

            <div className="col">

                <div className="card shadow-sm rounded">

                    <img src={objProducto.imagen} className="card-img-top" alt="" style={{width:'100%',height:'200px', objectFit:'contain'}}/>

                    <div className="card-body">
                        <p className="card-text">{objProducto.descripcion} </p>
                        <p className="card-text">S/. {objProducto.precio} </p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-danger my-2"

                                    onClick={() => {
                                        setMostrar(true);
                                    }}

                                >Ver</button>
                                <button type="button" className="btn btn-sm btn-outline-danger my-2" onClick={agregarProducto}>Carrito</button>
                            </div>
                            <small className="text-muted">{objProducto.categoriaId}</small>
                        </div>
                    </div>
                </div>
                <TiendaVerProducto mostrar={mostrar} setMostrar={setMostrar} objProducto={objProducto} />
               
            </div>



        </>
    )
}

export default TiendaProducto
