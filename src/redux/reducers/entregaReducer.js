import { SET_ENTREGA } from "../types/types";




const initialState = {
    entregas: [
        // nombre= "",
        // apellidos= "",
        // dni= 0,
        // email= "",
        // telefono= 0,
    ],
  
};

export const entregaReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_ENTREGA:
            return {
                ...state,
                entregas: action.payload
            };
            default:
          
            return state;
    }
};