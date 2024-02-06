
import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title} from 'chart.js';
import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
);

const Estadistica = () => {

   

  const labels = ['Pedidos completados',];

  const data2 = {
    labels,
    datasets: [
      {
        label: 'Mes actual',
        data: labels.map(() => 5) , // cambiar nuero por valores reales
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Mes pasado',
        data: labels.map(() => 10) , // cambiar nuero por valores reales
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
  
  const data = {
    labels: ["Pandulce", "salao", "relleno", "seco", "tostao", "de ajo"], // nombres de los productos
    datasets: [
      {
        label: 'Pandulce', // Nombre de producto
        data: [0, 10, 3, 5, 2, 3], // cantidades vendidas de los productos
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

    return ( 
        <>
          <h1 className ="text-3xl text-center font-semibold text-gray-700 mb-4"> 
          Estadistica
          </h1>
          <div className="flex flex-wrap">
            <div className="p-3 m-4 shadow-md bg-white h-full flex flex-col justify-between">
              <Pie data={data} />;
            </div>
            <div className="p-3 m-4 shadow-md bg-white h-full flex flex-col justify-between w-7/12" >
              <Bar options={options} data={data2} />;
            </div>
          </div>
        </>
    );
}

export default Estadistica;