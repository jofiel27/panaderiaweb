import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return ( 
        <>
         <div className="xl:w-2/12 bg-white shadow-lg fixed h-full">
            <div className="p-6">
                <p className="uppercase text-gray-700 text-2xl tracking-wide font-bold">Soho </p>
            
                <nav className="mt-11">
                    
                    <NavLink className ="p-1 text-gray-700 block hover:bg-amber-500"  end='true' to="/">Inicio</NavLink>
                    
                    <NavLink className ="p-2 text-gray-700 block hover:bg-amber-500"  end='true' to="/Pedidos">Pedidos</NavLink>
                    <NavLink className ="p-2 text-gray-700 block hover:bg-amber-500"  end='true' to="/Mercancia">Mercancia</NavLink>
                    <NavLink className ="p-2 text-gray-700 block hover:bg-amber-500"  end='true' to="/Historial">Historial</NavLink>
                    <NavLink className ="p-2 text-gray-700 block hover:bg-amber-500"  end='true' to="/Estadisticas">Estadísticas</NavLink>
                </nav>
            </div>
         </div>
        </>
    );
}

export default Sidebar;