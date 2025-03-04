// App.js or wherever you are using the StockDashboard component
import React from 'react';
import StockDashboard from './components/Chart';

const App = () => {
  // Sample price data (time, price)
  const priceData = [
    { time: '2024-12-01', price: 100 },
    { time: '2024-12-02', price: 105 },
    { time: '2024-12-03', price: 110 },
    { time: '2024-12-04', price: 108 },
    { time: '2024-12-05', price: 115 },
  ];

  // Sample volume data (time, volume)
  const volumeData = [
    { time: '2024-12-01', volume: 1000 },
    { time: '2024-12-02', volume: 1200 },
    { time: '2024-12-03', volume: 1300 },
    { time: '2024-12-04', volume: 1500 },
    { time: '2024-12-05', volume: 1600 },
  ];

  return (
    <div>
      <h1>Stock Dashboard</h1>
      <StockDashboard priceData={priceData} volumeData={volumeData} />
    </div>
  );
};

export default App;
