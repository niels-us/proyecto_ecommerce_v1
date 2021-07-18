import React from "react";
import TiendaProductos from "../components/TiendaProductos";
import TiendaHeader from "../components/TiendaHeader";
import TiendaSlider from "../components/TiendaSlider";
import TiendaOfertas from "../components/TiendaOfertas";
import TiendaSocialbar from "../components/TiendaSocialbar";
import TiendaFooter from "../components/TiendaFooter";
import TiendaSliderOfertas from "../components/TiendaSliderOfertas";
import { useSelector } from "react-redux";

const TiendaTienda = () => {
  const { categorias } = useSelector((state) => state.categoria);

  let mostratSlider = true;
  if (categorias.length > 0) {
    mostratSlider = false;
  }

  return (
    <>
      <TiendaHeader />
      <TiendaSocialbar />
      {mostratSlider ? <TiendaSlider /> : null}
      <TiendaProductos categorias={categorias} />
      <TiendaOfertas />
      <TiendaSliderOfertas />
      <TiendaFooter />
    </>
  );
};

export default TiendaTienda;
