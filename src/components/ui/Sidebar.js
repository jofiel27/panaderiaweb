import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import Swal from "sweetalert2";
import usuario from "../assets/logo2.png"
const Sidebar = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();
  return (
    <>
      <div className="md:w-2/5 xl:w-1/5 bg-white shadow-lg">
        <div className="p-6">
        <div className="flex items-center justify-center border-4 border-gray-100 rounded-3xl">
       <img src={usuario} alt="100" />
       </div>
          <p className="uppercase text-amber-700 text-2xl tracking-wide font-bold text-center pt-5">
            Soho{" "}
          </p>

          <nav className="mt-11">
          

            <NavLink
              className="p-2 text-gray-700 block hover:bg-amber-500 font-bold hover:text-gray-100"
              end="true"
              to="/Pedidos"
            >
              Pedidos
            </NavLink>
            <NavLink
              className="p-2 text-gray-700 block hover:bg-amber-500 font-bold  hover:text-gray-100"
              end="true"
              to="/Mercancia"
              onClick={() => {
                if (user?.email === "despachador@panaderia.com") {
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "No tienes acceso a esta ruta!",
                    footer:
                      '<a href="#">No puedes ingresar con este usuario!</a>',
                  });
                }
              }}
            >
              Mercancia
            </NavLink>
            <NavLink
              className="p-2 text-gray-700 block hover:bg-amber-500 font-bold  hover:text-gray-100"
              end="true"
              to="/Historial"
              onClick={() => {
                if (user?.email === "despachador@panaderia.com") {
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "No tienes acceso a esta ruta!",
                    footer:
                      '<a href="#">No puedes ingresar con este usuario!</a>',
                  });
                }
              }}
            >
              Historial
            </NavLink>
            <NavLink
              className="p-2 text-gray-700 block hover:bg-amber-500 font-bold  hover:text-gray-100"
              end="true"
              to="/Estadisticas"
              onClick={() => {
                if (user?.email === "despachador@panaderia.com") {
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "No tienes acceso a esta ruta!",
                    footer:
                      '<a href="#">No puedes ingresar con este usuario!</a>',
                  });
                }
              }}
            >
              Estadísticas
            </NavLink>
            <NavLink
            className="p-2 text-gray-700 block hover:bg-amber-500 font-bold  hover:text-gray-100"
            to="/"
            onClick={() => {
              signOut(auth)
                .then(() => {
                  navigate("/");
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            Cerrar Sesión
          </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
