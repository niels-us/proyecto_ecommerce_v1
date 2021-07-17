import { SET_REGISTRO } from "../types/types";



export const getRegistro = (datosCliente) => {
    return {
        
        type: SET_REGISTRO,
        payload: datosCliente
        
    };
    
};