import React, { useEffect, useRef } from 'react';
import { Line, Bar } from 'react-chartjs-2';  // Import both Line and Bar charts
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, BarElement } from 'chart.js';

// Register necessary Chart.js components, including BarElement
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  BarElement  // Register BarElement here
);

const StockDashboard = ({ priceData, volumeData }) => {
  const chartRef = useRef(null);

  // Prepare chart data for Price (Line Chart)
  const priceChartData = {
    labels: priceData.map((data) => data.time),
    datasets: [
      {
        label: 'Price',
        data: priceData.map((data) => data.price),
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
        pointRadius: 3, // Show points for better visibility
      },
    ],
  };

  const volumeChartData = {
    labels: volumeData.map((data) => data.time),
    datasets: [
      {
        label: 'Volume',
        data: volumeData.map((data) => data.volume),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const priceChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Stock Price' },
    },
    scales: {
      x: { title: { display: true, text: 'Time' } },
      y: { title: { display: true, text: 'Price' } },
    },
  };

  const volumeChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Volume' },
    },
    scales: {
      x: { title: { display: true, text: 'Time' } },
      y: { title: { display: true, text: 'Volume' }, beginAtZero: true },
    },
  };

  useEffect(() => {
    // Cleanup previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }
  }, [priceData, volumeData]);

  return (
    <div>
      <div style={{ height: '400px', position: 'relative' }}>
        <Line ref={chartRef} data={priceChartData} options={priceChartOptions} />
      </div>
      <div style={{ height: '200px', marginTop: '20px' }}>
        <Bar data={volumeChartData} options={volumeChartOptions} />
      </div>
    </div>
  );
};

export default StockDashboard;
