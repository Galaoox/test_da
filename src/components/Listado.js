import React, { useState } from 'react';
import Registros from './data.json';
// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.
import Item from './Item';
export default function Listado({changeCantidad}) {
	// Exportar stock a Item para que pueda ser usado por el componente Item.
	// useState es un hook que nos permite crear un estado para un componente.
	// changeCantidad llega al componente listado como un prop y despues se le pasa esa propiedad a cada uno de los items que se generan

	return (
		<div className='container'>
			{/* renderizamos los Item aquí */}
			{Registros.map((data) => {
				return (
					<Item data={data} changeCantidad={changeCantidad} key={data.id} />
				);
			})}
		</div>
	);
}
