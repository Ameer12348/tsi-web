"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aughudt",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Monthly Sales",
      data: [33, 53, 85, 41, 44, 65, 34, 33, 53, 85, 41, 44, 65, 34],
      borderColor: "#51b206",
      backgroundColor: "#51b206",
      fill: true,
    },
    {
      label: "Monthly Sales",
      data: [10, 33, 30, 33, 12, 55, 100, 10, 16, 30, 33, 77, 12, 100],
      fill: true,
      borderColor: "#888ea2",
      backgroundColor: "#888ea2",
    },
  ],
};
// Options for the chart
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return context.dataset.label + ": " + context.raw;
        },
      },
    },
  },
};
const DashboardGraph = () => {
  return <Line data={data} options={options} />;
};

export default DashboardGraph;
