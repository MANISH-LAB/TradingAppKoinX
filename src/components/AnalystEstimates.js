import React from 'react';
import DynamicBars from '../utils/charts/DynamicBars';

const AnalystEstimates = () => {
  const divStyle = {
    backgroundColor: '#ebf9f4',
    width: '150px',
    height: '150px',
    borderRadius: '50%',  // This makes the div rounded and creates a circle
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div className='flex'>
      <div className='rounded-full m-6 px-8' style={divStyle}>
        <p className='text-5xl font-semibold text-[#0fba83] pl-3'>76</p><span className='text-[#0fba83] p-1 text-2xl'>%</span>
      </div>
      <DynamicBars/>
    </div>
  );
}

export default AnalystEstimates;
