import React from "react";
import TiendaProducto from "./TiendaProducto";
import { useSelector } from "react-redux";

const TiendaProductos = ({ categorias }) => {
  const { productos } = useSelector((state) => state.producto);

  let vistaProductos = [];
  if (categorias.length > 0) {
    vistaProductos.push(...categorias);
  } else {
    productos.forEach((element) => {
      vistaProductos.push(...element.productos);
    });
  }

  return (
    <>
      <h1 className="display-4 fw-normal text-center mt-5">Catalogo de productos</h1>
      <p className="fs-5 text-muted text-center ">
        Aprovechas estas increibles precios.
      </p>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {vistaProductos.map((objProducto) => {
              return (
                <TiendaProducto
                  objProducto={objProducto}
                  key={objProducto.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TiendaProductos;
