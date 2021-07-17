import React from "react";
import TiendaProductos from "../components/TiendaProductos";
import TiendaHeader from "../components/TiendaHeader";
import TiendaSlider from "../components/TiendaSlider";
import TiendaOfertas from "../components/TiendaOfertas";
import TiendaSocialbar from "../components/TiendaSocialbar";
import TiendaFooter from "../components/TiendaFooter";
import TiendaSliderOfertas from "../components/TiendaSliderOfertas";


const TiendaTienda = () => {
    return (
        <>
            <TiendaHeader/>
            <TiendaSocialbar/>
            <TiendaSlider/>
            <TiendaProductos />
            <TiendaOfertas/>
            <TiendaSliderOfertas/>
            <TiendaFooter/>

        </>
    );
};

export default TiendaTienda;
