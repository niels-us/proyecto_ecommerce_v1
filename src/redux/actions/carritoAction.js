import { AGREGAR_PRODUCTO, ELIMINAR_TODO } from '../types/types';
import { ELIMINAR_PRODUCTO } from '../types/types';
import { RESTAR_PRODUCTO } from '../types/types';
import { SUMAR_PRODUCTO } from '../types/types';

export const agregarProductoAlCarrito = (objProducto) => {
	return {
		type: AGREGAR_PRODUCTO,
		payload: {
			objProducto: objProducto
		}
	};
};
export const eliminarProductoAlCarrito = (objProducto) => {
	return {
		type: ELIMINAR_PRODUCTO,
		payload: {
			objProducto: objProducto
		}
	};
};
export const sumarProductoAlCarrito = (objProducto) => {
	return {
		type: SUMAR_PRODUCTO,
		payload: {
			objProducto: objProducto
		}
	};
};

export const restarProductoAlCarrito = (objProducto) => {
	return {
		type: RESTAR_PRODUCTO,
		payload: {
			objProducto: objProducto
		}
	};
};

export const eliminarTodolosproductos = (objProducto) => {
	return {
		type: ELIMINAR_TODO,
		payload: objProducto
	};
};
