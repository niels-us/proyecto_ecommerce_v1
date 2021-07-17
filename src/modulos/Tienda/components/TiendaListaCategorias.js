import React from 'react'

const TiendaListaCategorias = ({ objCategoria }) => {
    return (
        <>
            < li > <a className="dropdown-item" href="#">{objCategoria.titulo}</a>   </li>

        </>
    )
}

export default TiendaListaCategorias
