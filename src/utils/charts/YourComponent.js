import React from 'react';
import { TiArrowSortedUp } from "react-icons/ti";
const GradientLineChart = ({ startValue, endValue, currentValue }) => {
  const percentagePosition = ((currentValue - startValue) / (endValue - startValue)) * 100;

  return (
    <div className="relative w-full h-2  my-4  bg-gradient-to-r from-red-500 to-green-500">
      { currentValue!==null ?
      <div
        className="absolute left-0 top-0 h-full"
        style={{ left: `${percentagePosition}%` }}
      ><TiArrowSortedUp style={{ fontSize: '24px' }}/>
        $ {currentValue.toLocaleString()}</div>: null
}
    </div>
  );
};

// Example usage
const YourComponent = ({LowValue, HighValue,CurrentValue}) => {
  const startValue = LowValue;
  const endValue = HighValue;
  const currentValue = CurrentValue;

  return <GradientLineChart startValue={startValue} endValue={endValue} currentValue={currentValue} />;
};

export default YourComponent;
