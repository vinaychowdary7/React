import React from 'react';

const Header = ({ stockPrice, change }) => (
  <div className="header">
    <h1>{stockPrice.toFixed(2)} USD</h1>
    <p style={{ color: change >= 0 ? 'green' : 'red' }}>
      {change >= 0 ? `+${change.toFixed(2)}` : `${change.toFixed(2)}`} ({((change / (stockPrice - change)) * 100).toFixed(2)}%)
    </p>
  </div>
);

export default Header;
