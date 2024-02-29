import React, { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase/config";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import usuario from "../assets/usuario2.png"

const Login = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    if (email === "despachador@panaderia.com" || email === "supervisor@panaderia.com") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/Pedidos");
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algun dato esta incorrecto!",
            footer: '<a href="#">Intenta de nuevo por favor!</a>',
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario no registrado!",
        footer: '<a href="#">No tienes acceso a esta area!</a>',
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-yellow-600 to-amber-400">
      <div className="bg-gray-100 p-8 rounded-xl shadow-md w-96 border-4 border-white">
        <div className="flex items-center justify-center border-4 border-gray-100 ">
       <img src={usuario} alt="100" />
       </div>
        <h2 className="text-2xl text-yellow-700 font-bold mb-4 text-center">Iniciar Sesión</h2>

        <div className="mb-4">
          <label
            className="block text-yellow-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Correo Electrónico
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="email"
            id="email"
            placeholder="TuCorreo@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-yellow-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="password"
            id="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex justify-center">
          <button
            className="bg-yellow-800 text-white py-2 px-4 rounded hover:bg-yellow-700 focus:outline-none m-auto"
            onClick={handleLogin}
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;