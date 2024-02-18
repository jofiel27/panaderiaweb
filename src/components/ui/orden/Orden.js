import React, { useContext } from "react";
import { FirebaseContext } from "../../../firebase";

const Orden = ({ orden, }) => {

    //context de firebase
    const { firebase } = useContext(FirebaseContext);
    //completa el estado de una orden
    const completarOrden = id => {
        try {
            firebase.db.collection('Ordenes')
            .doc(id)
            .update({
                completado:true
            })
        } catch (error) {
            console.log(error);
        }
    }
   
    return ( 
       
        <div className="sm:w-1/2 lg:w-1/3 px-2 mb-4">
         
          
        <div className="p-3 shadow-md bg-white h-full flex flex-col justify-between">
            <h1 className="text-yellow-800 text-lg font-bold"> {orden.id}</h1>
            {orden.orden.map( platillos => (
                <p className="text-gray-800">{platillos.cantidad} {platillos.Producto} </p>
            ))}
             <p className="text-gray-700 font-bold" >Numero de Referencia {orden.numeroReferencia}</p>
            <p className="text-gray-700 font-bold" >Total a Pagar: Bs {orden.total} </p>
            <p className="text-gray-700 font-bold" >Fecha: {orden.creado} </p>
            { !orden.completado && (
                <button 
                type="button"
                className="bg-yellow-800 hover:bg-yellow-600 w-full mt-5 p-2 text-white uppercase font-bold"
                onClick={ () => completarOrden( orden.id)}
                >
                    Marcar Como Completado
                </button>
            )}
        </div>
        </div>
    );
}

export default Orden;