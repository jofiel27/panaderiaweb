import React, { useEffect, useState } from "react";
import { filtrarProductos } from "../Funciones/filtrarProductos";
import { obtenerFechasDelMes } from "../Funciones/obtenerFechasDelMes";
import { encontrarProductoMasVendido } from "../Funciones/encontrarProductoMasVendido";
import Swal from "sweetalert2";
import BarChart from "../Graficas/BarChart";
import Cantidades from "../Graficas/Cantidades";
import { filtrarFecha } from "../Funciones/filtrarFecha";

const ProductoMasVendido = ({ ordenes }) => {
  const alert = () => {
    setIsActive("text-gray-500 opacity-50");
    setImagen(
      "https://firebasestorage.googleapis.com/v0/b/restaurant-375ba.appspot.com/o/productos%2Fd6d07296-8309-48f4-ae55-e89b087daf54.jpg?alt=media&token=6cb34a80-a9a2-4eff-b72c-623a9e9999fe"
    );
    setNombre("Pizza");
    setCantidad(0);
    setDescripcion("Deliciosa Pizza De Doble queso");
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "No hay ordenes en este mes!",
      footer: '<a href="#">No existe producto vendido en este mes</a>',
    });
  };

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const currentMonth = new Date().toLocaleString("default", { month: "long" });
  const [isActive, setIsActive] = useState("text-gray-500 opacity-50");
  const [imagen, setImagen] = useState(
    "https://firebasestorage.googleapis.com/v0/b/restaurant-375ba.appspot.com/o/productos%2Fd6d07296-8309-48f4-ae55-e89b087daf54.jpg?alt=media&token=6cb34a80-a9a2-4eff-b72c-623a9e9999fe"
  );
  const [nombre, setNombre] = useState("Pizza");
  const [cantidad, setCantidad] = useState("0");
  const [descripcion, setDescripcion] = useState(
    "Deliciosa Pizza De Doble queso"
  );

  const [selectedMonth, setSelectedMonth] = useState("Enero");
  const [display, setDisplay] = useState("hidden");

  const traerDatos = (ordenes, mes) => {
    let newArray = [];
    let MesActual = new Date().getMonth() + 1;
    let FechaMesActual = {};

    /*     FechaMesActual = obtenerFechasDelMes(MesActual);
    newArray = filtrarProductos(
      ordenes,
      "",
      FechaMesActual?.fechaInicio,
      FechaMesActual?.fechaFin
    );
    return newArray; */
    switch (mes) {
      case "Noviembre-2023":
        FechaMesActual = obtenerFechasDelMes(1);
        newArray = filtrarProductos(ordenes, "", "11/01/2023", "11/31/2023");
        return newArray;
      case "Diciembre-2023":
        FechaMesActual = obtenerFechasDelMes(1);
        newArray = filtrarProductos(ordenes, "", "12/01/2023", "12/31/2023");
        return newArray;
      case "Enero":
        FechaMesActual = obtenerFechasDelMes(1);
        newArray = filtrarProductos(
          ordenes,
          "",
          FechaMesActual.fechaInicio,
          FechaMesActual.fechaFin
        );
        return newArray;
      case "Febrero":
        FechaMesActual = obtenerFechasDelMes(2);
        newArray = filtrarProductos(
          ordenes,
          "",
          FechaMesActual.fechaInicio,
          FechaMesActual.fechaFin
        );
        return newArray;
      case "Marzo":
        FechaMesActual = obtenerFechasDelMes(3);
        newArray = filtrarProductos(
          ordenes,
          "",
          FechaMesActual.fechaInicio,
          FechaMesActual.fechaFin
        );
        return newArray;
      case "Abril":
        FechaMesActual = obtenerFechasDelMes(4);
        newArray = filtrarProductos(
          ordenes,
          "",
          FechaMesActual.fechaInicio,
          FechaMesActual.fechaFin
        );
        return newArray;
      case "Mayo":
        FechaMesActual = obtenerFechasDelMes(5);
        newArray = filtrarProductos(
          ordenes,
          "",
          FechaMesActual.fechaInicio,
          FechaMesActual.fechaFin
        );
        return newArray;
      case "Junio":
        FechaMesActual = obtenerFechasDelMes(6);
        newArray = filtrarProductos(
          ordenes,
          "",
          FechaMesActual.fechaInicio,
          FechaMesActual.fechaFin
        );
        return newArray;
      case "Julio":
        FechaMesActual = obtenerFechasDelMes(7);
        newArray = filtrarProductos(
          ordenes,
          "",
          FechaMesActual.fechaInicio,
          FechaMesActual.fechaFin
        );
        return newArray;
      case "Agosto":
        FechaMesActual = obtenerFechasDelMes(8);
        newArray = filtrarProductos(
          ordenes,
          "",
          FechaMesActual.fechaInicio,
          FechaMesActual.fechaFin
        );
        return newArray;
      case "Septiembre":
        FechaMesActual = obtenerFechasDelMes(9);
        newArray = filtrarProductos(
          ordenes,
          "",
          FechaMesActual.fechaInicio,
          FechaMesActual.fechaFin
        );
        return newArray;
      case "Octubre":
        FechaMesActual = obtenerFechasDelMes(10);
        newArray = filtrarProductos(
          ordenes,
          "",
          FechaMesActual.fechaInicio,
          FechaMesActual.fechaFin
        );
        return newArray;
      case "Noviembre":
        FechaMesActual = obtenerFechasDelMes(11);
        newArray = filtrarProductos(
          ordenes,
          "",
          FechaMesActual.fechaInicio,
          FechaMesActual.fechaFin
        );
        return newArray;
      case "Diciembre":
        FechaMesActual = obtenerFechasDelMes(12);
        newArray = filtrarProductos(
          ordenes,
          "",
          FechaMesActual.fechaInicio,
          FechaMesActual.fechaFin
        );
        return newArray;
      case "diciembre":
        FechaMesActual = obtenerFechasDelMes(12);
        newArray = filtrarProductos(
          ordenes,
          "",
          FechaMesActual.fechaInicio,
          FechaMesActual.fechaFin
        );
        return newArray;
    }
  };

  let productos = [];
  let productoMasVendido = {};
  let cantidades = [];
  const [ordenesGrafica, setOrdenesGrafica] = useState([]);
  const [cantidadesGrafica, setCantidadesGrafica] = useState([]);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  /* productos = filtrarProductos(ordenes, "", fechaInicio, fechaFin); */

  /* const { nombre, cantidad, descripcion, imagen } = productoMasVendido; */

  const cantidadesVendidas = (ordenes) => {
    let arrayActual = [];
    let arrayPasado = [];
    let MesActual = new Date().getMonth() + 1;
    let FechaMesActual = obtenerFechasDelMes(MesActual);
    let MesPasado = MesActual - 1;
    let FechaMesPasado = obtenerFechasDelMes(MesPasado);
    arrayActual = filtrarFecha(
      ordenes,
      FechaMesActual.fechaInicio,
      FechaMesActual.fechaFin
    );
    arrayPasado = filtrarFecha(
      ordenes,
      FechaMesPasado.fechaInicio,
      FechaMesPasado.fechaFin
    );
    return [arrayPasado.length, arrayActual.length];
  };

  return (
    <>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <h2 className={`text-2xl font-bold mb-4  ${isActive}`}>
            Ventas en el mes
          </h2>
          <label htmlFor="monthSelect" className="text-sm font-semibold">
            Selecciona el mes:
          </label>
          <select
            name="monthSelect"
            id="monthSelect"
            className="block w-full p-2 mt-1 border rounded-md bg-white focus:outline-none focus:ring focus:border-blue-300"
            value={selectedMonth}
            onChange={handleMonthChange}
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-between items-center">
          <p className={`text-lg font-semibold ${isActive}`}>
            Vendido en {selectedMonth.toUpperCase()}:{" "}
          </p>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded uppercase"
            onClick={() => {
              productos = traerDatos(ordenes, selectedMonth);
              setOrdenesGrafica(productos);
              cantidades = cantidadesVendidas(ordenes);
              setCantidadesGrafica(cantidades);

              productoMasVendido = encontrarProductoMasVendido(productos);

              setImagen(productoMasVendido?.imagen);
              setNombre(productoMasVendido?.nombre);
              setDescripcion(productoMasVendido?.descripcion);
              setCantidad(productoMasVendido?.cantidad);
              setIsActive("");
              setDisplay("block");
              console.log(ordenes);
              console.log(selectedMonth);
              console.log(productos);

              console.log(cantidades);
              console.log(productoMasVendido);
              if (productoMasVendido === null) {
                setDisplay("hidden");
                alert();
              }
            }}
          >
            Consultar
          </button>
        </div>
      </div>
      {/*       <div
        className={`m-auto bg-gray-100 p-6 rounded-lg shadow-md w-100 mt-3 sm:w-full none md:max-w-md ${display} flex justify-center`}
      >
        
      </div>
      <div
        className={`m-auto bg-gray-100 p-6 rounded-lg shadow-md w-100 mt-3 none md:max-w-2xl ${display} flex justify-center`}
      >
       
      </div> */}
      <div
        className={`${display} m-auto w-100 bg-gray-100 p-6 rounded-lg shadow-md mt-3 `}
      >
        <div className="md:w-80 sm:w-72 xl:flex md:ml-36">
          <BarChart ordenes={ordenesGrafica}></BarChart>
          <Cantidades cantidades={cantidadesGrafica}></Cantidades>
        </div>
      </div>
    </>
  );
};

export default ProductoMasVendido;
