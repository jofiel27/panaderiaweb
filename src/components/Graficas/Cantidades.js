import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { agruparOrdenes } from "../Funciones/agruparOrdenes";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function obtenerNombreMes(numeroMes) {
  // Crear una nueva instancia de Date
  var fecha = new Date();
  // Establecer el año en 0 y el mes en el número proporcionado
  fecha.setFullYear(0);
  fecha.setMonth(numeroMes - 1); // Los meses en JavaScript van de 0 a 11

  // Array con los nombres de los meses
  var nombresMeses = [
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

  // Devolver el nombre del mes correspondiente
  return nombresMeses[fecha.getMonth()];
}

export default function BarChart({ cantidades }) {
  /*   console.log(ordenes);
  let ventas = agruparOrdenes(ordenes);
  console.log(ventas);

  const productos = ventas.map((venta) => venta.nombre);
  const cantidadVendida = ventas.map((venta) => venta.cantidad); */

  // Función para obtener el nombre del mes a partir de su número

  let mesActual = obtenerNombreMes(new Date().getMonth() + 1);
  let mesPasado = obtenerNombreMes(new Date().getMonth());
  console.log(cantidades);
  console.log(mesActual);
  console.log(mesPasado);

  const data = {
    labels: [mesPasado, mesActual],
    datasets: [
      {
        label: "Cantidad de ordenes completadas",
        data: cantidades,
        backgroundColor: [
          "rgb(239 68 68)",
          "violet",
          "rgb(8 145 178)",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
  const options = {};

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
}
