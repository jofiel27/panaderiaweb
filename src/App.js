
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router';  

import firebase, { FirebaseContext } from './firebase';
import { AuthProvider } from './context/authContext';
import { getAuth } from "firebase/auth";
import Pedidos from './components/paginas/Pedidos';
import Mercancia from './components/paginas/Mercancia';
import NuevoProducto from './components/paginas/NuevoProducto';
import Sidebar from './components/ui/Sidebar';
import Historial from './components/paginas/Historial';
import Inicio from './components/paginas/Inicio';
import Login from './components/paginas/Login';
import Register from './components/paginas/Register'
import Estadistica from './components/paginas/Estadistica';
import { useNavigate, Navigate } from "react-router";

function App() {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  return (
    <FirebaseContext.Provider
    value={{
      firebase
    }}
    >
    <div className='md:flex min-h-screen'>
           <Sidebar/>
      <div className='md:w-3/5 xl:w-4/5 p-6' >
      <Routes>
        <Route path ='/Inicio' element={user ? <Inicio /> : <Navigate to="/" />}  /> 
        <Route path ='/Pedidos' element={user ? <Pedidos /> : <Navigate to="/" />} /> 
        <Route path ='/Mercancia' element={
                user?.email === "supervisor@panaderia.com" ? (
                  <Mercancia />
                ) : (
                  <Navigate to="/Pedidos" />
                )
              } />
        <Route path ='/' element = { <Login/> } />
        <Route path ='/Estadisticas' element={
                user?.email === "supervisor@panaderia.com" ? (
                  <Estadistica />
                ) : (
                  <Navigate to="/Pedidos" />
                )
              } />
        <Route path ='/NuevoProducto' element = { <NuevoProducto/> } />
        <Route path ='/Historial' element={
                user?.email === "supervisor@panaderia.com" ? (
                  <Historial />
                ) : (
                  <Navigate to="/Pedidos" />
                )
              } />
        <Route path ='/Register' element = { <Register/> } />
      </Routes>
      </div>
    </div>

    </FirebaseContext.Provider>
  );
}

export default App;
