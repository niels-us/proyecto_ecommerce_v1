import { SET_ENTREGA } from "../types/types";


export const getEntrega = (datosEntrega) => {
    return {
        
        type: SET_ENTREGA,
        payload: datosEntrega
        
    };
    
};