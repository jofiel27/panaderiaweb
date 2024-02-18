import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Filler,
} from "chart.js";

import { Bar, Doughnut, Pie } from "react-chartjs-2";
import { agruparOrdenes } from "../Funciones/agruparOrdenes";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

export default function BarChart({ ordenes }) {
  console.log(ordenes);
  let ventas = agruparOrdenes(ordenes);
  console.log(ventas);

  const productos = ventas.map((venta) => venta.Producto);
  const cantidadVendida = ventas.map((venta) => venta.cantidad);

  const data = {
    labels: productos,
    datasets: [
      {
        label: "Cantidad de Ventas en el mes",
        data: cantidadVendida,
        backgroundColor: [
          "rgb(248 113 113)",
          "rgb(251 146 60)",
          "rgb(163 230 53)",
          "red",
          "violet",
          "blue",
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
      <Pie data={data} options={options} />
    </>
  );
}
