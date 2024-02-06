import React, {useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../firebase";

import Producto from '../ui/Producto';

const Mercancia = () => {
   

  // definir el state para los productos
  const [ productos , guardarProducto ] = useState([]);

  const { firebase } = useContext(FirebaseContext);
  
// consultar la base de datos al cargar  
useEffect(() => {
    const obtenerProducto =  () => {
       firebase.db.collection('ProductoN').onSnapshot(handleSnapshot);
  }
  
  
  obtenerProducto();
    
   },[]);
// snapshot nos permite utilizar la base de datos en tiempo real de firestore
  function handleSnapshot(snapshot){
    const productos =  snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });
    //almacenar resultado en el state
    guardarProducto(productos);

  };
  return ( 
        <>
          <h1 className ="text-3xl font-semibold text-gray-700 mb-4 text-center"> 
          Productos
          </h1>
          <Link to='/NuevoProducto' className="ml-3 bg-yellow-800  hover:bg-black inline-block mb-5 p-2 text-white uppercase font-bold">
          Agregar Producto
          </Link>
          <Link to='/Estadisticas' className="ml-3 bg-yellow-800 hover:bg-black inline-block mb-5 p-2 text-white uppercase font-bold">
          Estadisticas
          </Link>
            {productos.map( producto => (
              <Producto
                key={producto.id}
                producto={producto}
               
              />
            ))}

        </>
    );
}

export default Mercancia;