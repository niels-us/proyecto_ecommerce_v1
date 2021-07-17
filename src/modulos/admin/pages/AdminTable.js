import React from "react";
import { useSelector } from "react-redux";

const AdminTable = () => {
  const { pedido_ventas, cargando_ventas } = useSelector(
    (state) => state.ventas
  );
  return (
    <>
      <div className="container">
        <h1 className="display-4 mt-5">
          Administracion de Ventas - <span className="text-danger">NUS</span>
        </h1>
        <hr />
        <div className="row">
          <div className="col-12 mt-3"></div>
          {cargando_ventas ? (
            <div className="spinner-border text-danger mx-auto my-5" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>            
          ) : (
            <table className="table table-danger table-hover my-3 shadow">
              <thead className="table-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Comprobante</th>
                  <th scope="col">Tipo_Pago</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Fecha_Pedido</th>
                  <th scope="col">Precio Total</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Dirección</th>
                  <th scope="col">País</th>
                </tr>
              </thead>
              <tbody>
                {pedido_ventas.map((objVentas, i) => {
                  return (
                    <tr>
                      <th scope="row">{i + 1}</th>
                      <td>{objVentas.comprobante}</td>
                      <td>{objVentas.tipo_pago}</td>
                      <td>{objVentas.nombre}</td>
                      <td>{objVentas.descripcion}</td>
                      <td>{objVentas.pedido_fecha}</td>
                      <td>{objVentas.pedido_pecio}</td>
                      <td>{objVentas.correo}</td>

                      <td>{objVentas.direccion}</td>
                      <td>{objVentas.pais}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminTable;
