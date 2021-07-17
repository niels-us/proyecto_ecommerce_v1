import { SET_REGISTRO } from "../types/types";





const initialState = {
    clientes: [
        // nombre= "",
        // apellidos= "",
        // dni= 0,
        // email= "",
        // telefono= 0,
    ],
  
};

export const registroReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_REGISTRO:
            return {
                ...state,
                clientes: action.payload
            };
            default:
          
            return state;
    }
};