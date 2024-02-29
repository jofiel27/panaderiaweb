import React, { useEffect, useContext, useState} from "react";
import { FirebaseContext } from '../../firebase';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import Orden from "../ui/orden";

const Pedidos = () => {

  //context con las operaciones de firebase
  const { firebase } = useContext(FirebaseContext);

  //STATE CON LAS ORDENES
  const [Ordenes, guardarOrdenes] = useState([]);

  useEffect(() => {
    const obtenerOrdenes = () => {
      firebase.db.collection('Ordenes').where('completado', "==", false).onSnapshot(manejarSnapshot);
    }
    obtenerOrdenes();

  }, []); 

  function manejarSnapshot(snapshot) {
      const Ordenes = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });

      guardarOrdenes(Ordenes);
  }

    return ( 
        <>
        <div className="bg-gradient-to-r from-yellow-600 to-amber-400 h-full">
          <h1 className ="text-3xl font-semibold text-gray-100 mb-4 text-center pt-5"> 
          Pedidos
          </h1>
          <div className="flex flex-wrap">

          {Ordenes.map(orden => (
            <Orden
            key={orden.id}
            orden={orden}
            className="flex-1 h-16"
            />
          ))}

          </div>
         </div>
        </>
    );
}

export default Pedidos;