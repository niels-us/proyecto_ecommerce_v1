import { AGREGAR_PRODUCTO, ELIMINAR_PRODUCTO, ELIMINAR_TODO, RESTAR_PRODUCTO, SUMAR_PRODUCTO } from '../types/types';

const initialState = {
	productos: [],
	total: 0,
	transporte:0
};

export const carritoReducer = (state = initialState, action) => {
	switch (action.type) {
		case AGREGAR_PRODUCTO:
			// buscar el producto que se desea agregar en
			// el estado de la aplicación
			let copiaProductos = [...state.productos];
			let posicion = copiaProductos.findIndex(
				(objProducto) => objProducto.id === action.payload.objProducto.id
			);
			// si la posición es mayor o igual 0, significa que el produdcto ya existía
			// en el carrito global.
			if (posicion >= 0) {
				copiaProductos[posicion].cantidad += 1;
			} else {
				// este es el caso en el que no exista el producto en el carrito global
				copiaProductos.push({ ...action.payload.objProducto, cantidad: 1 });
			}

			// AQUI SACAR EL TOTAL

			let montoTotal = copiaProductos.reduce((sumatoria, objProducto) => {
				return objProducto.precio * objProducto.cantidad + sumatoria;
			}, 0);

			return {
				...state,
				productos: copiaProductos,
				// obtener el precio total de toooda la compra
				// HINT: RECORRER LOS PRODUCTOS DE LA copiaProductos final,
				// con la función reduce para obtener el total
				total: montoTotal,
				transporte:25
			};

		case ELIMINAR_PRODUCTO:

			let copiaProduct = [...state.productos];
			let id = action.payload.objProducto.id

			const nuevalista = copiaProduct.filter(objproducto => objproducto.id !== id)

			console.log(nuevalista)

			let montoTotal1 = nuevalista.reduce((sumatoria, objProducto) => {
				return objProducto.precio * objProducto.cantidad + sumatoria;
			}, 0);

			
				
			


			return {
				...state,
				productos: nuevalista,
				total: montoTotal1,
				transporte: 25
			};


		case RESTAR_PRODUCTO:
			let disminuiralcarrito = [...state.productos];
			let posdisminuirproductos = disminuiralcarrito.findIndex(
				(objProducto) => objProducto.id === action.payload.objProducto.id
			);

			disminuiralcarrito[posdisminuirproductos].cantidad -= 1;

			let montoTotal2 = disminuiralcarrito.reduce((sumatoria, objProducto) => {
				return objProducto.precio * objProducto.cantidad + sumatoria;
			}, 0);


			return {
				...state,
				productos: disminuiralcarrito,
				total: montoTotal2

			};
		case SUMAR_PRODUCTO:
			let aumentarcarrito = [...state.productos];
			let posaumentarproductos = aumentarcarrito.findIndex(
				(objProducto) => objProducto.id === action.payload.objProducto.id
			);
			aumentarcarrito[posaumentarproductos].cantidad += 1;

			let montoTotal3 = aumentarcarrito.reduce((sumatoria, objProducto) => {
				return objProducto.precio * objProducto.cantidad + sumatoria;
			}, 0);

			return {
				...state,
				productos: aumentarcarrito,
				total: montoTotal3

			};

		case ELIMINAR_TODO:
			// let copiaproductosActual = [...state.productos];
			// copiaproductosActual = copiaproductosActual.filter(
			// 	(objProducto) => objProducto.id !== action.payload
			// );
			// console.log(copiaproductosActual)
			return {
				...state,
				productos: [],
				total: 0,
				transporte:0
			};

		default:
			return state;
	}
};