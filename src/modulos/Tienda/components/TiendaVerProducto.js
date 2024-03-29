import React from 'react'
import { Modal } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';

const TiendaVerProducto = ({ mostrar, setMostrar, objProducto }) => {


    return (
        <Modal show={mostrar} onHide={() => setMostrar(false)} >
            <Modal.Header closeButton>
                <Modal.Title>{objProducto.titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div class="card">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={objProducto.imagen } class="img-fluid rounded-start w-100" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text">{objProducto.descripcion}.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
               
            </Modal.Footer>
        </Modal>
    )
}

export default TiendaVerProducto
