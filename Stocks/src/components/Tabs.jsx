import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['1d', '3d', '1w', '1m', '6m', '1y', 'max'];

  return (
    <div className="tabs">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`tab-button ${activeTab === tab ? 'active' : ''}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
