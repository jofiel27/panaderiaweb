
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router';  

import firebase, { FirebaseContext } from './firebase';
import { AuthProvider } from './context/authContext';

import Pedidos from './components/paginas/Pedidos';
import Mercancia from './components/paginas/Mercancia';
import NuevoProducto from './components/paginas/NuevoProducto';
import Sidebar from './components/ui/Sidebar';
import Historial from './components/paginas/Historial';
import Inicio from './components/paginas/Inicio';
import Login from './components/paginas/Login';
import Register from './components/paginas/Register'
import Estadistica from './components/paginas/Estadistica';

function App() {
  return (
    <FirebaseContext.Provider
    value={{
      firebase
    }}
    >
    <div className='md:flex min-h-screen'>
           <Sidebar/>
      <div className='w-full p-6' style={{marginLeft: "16%"}} >
      <Routes>
        <Route path ='/' element = { <Inicio/> } /> 
        <Route path ='/Pedidos' element = { <Pedidos/> } /> 
        <Route path ='/Mercancia' element = { <Mercancia/> } />
        <Route path ='/Login' element = { <Login/> } />
        <Route path ='/Estadisticas' element = { <Estadistica/> } />
        <Route path ='/NuevoProducto' element = { <NuevoProducto/> } />
        <Route path ='/Historial' element = { <Historial/> } />
        <Route path ='/Register' element = { <Register/> } />
      </Routes>
      </div>
    </div>

    </FirebaseContext.Provider>
  );
}

export default App;
