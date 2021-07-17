import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TiendaOferta = ({ objOferta }) => {
    return (
        <>
            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm" >
                    <div class="card-header py-3">
                        <h4 class="my-0 fw-normal">{objOferta.titulo} </h4>

                    </div>
                    <div class="card-body">
                        <img src={objOferta.imagen} className="w-100" alt="" />
                        <h1 class="card-title pricing-card-title">
                            {objOferta.descuento}% <small class="text-muted fw-light">/mo</small>
                        </h1>
                        {/* <ul class="list-unstyled mt-3 mb-4">
                            <li>10 users included</li>
                            <li>2 GB of storage</li>
                            <li>Email support</li>
                            <li>Help center access</li>
                        </ul> */}
                        <button type="button" class="w-100 btn btn-lg btn-outline-primary">
                            Aprovecha
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TiendaOferta;
