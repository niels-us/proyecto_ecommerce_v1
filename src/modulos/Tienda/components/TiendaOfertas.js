import React from "react";
import TiendaOferta from "./TiendaOferta";
import { useSelector } from "react-redux";

const TiendaOfertas = () => {
  const { ofertas, cargandoOfertas } = useSelector((state) => state.oferta);
  return (
    
      <div class="container py-3">
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {ofertas.map((objOferta) => {
            return <TiendaOferta objOferta={objOferta} key={objOferta.id} />;
          })}
        </div>
      </div>
    
  );
};

export default TiendaOfertas;
