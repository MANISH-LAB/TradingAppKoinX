import React from 'react';

const DynamicBars = () => {
  const data = [
    { name: 'Buy', percentage: 76, color: '#00b386' },
    { name: 'Hold', percentage: 8, color: '#c7c8ce' },
    { name: 'Sell', percentage: 16, color: '#f7324c' },
  ];

  return (
    <div className="my-4 w-full">
      {data.map((item, index) => (
        <div key={index} className="flex py-2 justify-start items-center">
          <p className="pr-8">{item.name}</p>
          <div className={`h-3 bg-${item.color} rounded-sm`} style={{ width: `${item.percentage}%`, backgroundColor: `${item.color}` }} />
          <p className="pl-2 text-gray-500">{item.percentage}%</p>
        </div>
      ))}
    </div>
  );
};

export default DynamicBars;
