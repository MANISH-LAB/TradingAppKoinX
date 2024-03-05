import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
  labels: ['Crowdsale investors: 80%', 'Foundation: 20%'],
  datasets: [
    {
      data: [80, 20],
      backgroundColor: ['rgba(59, 132, 246, 1)', 'orange'],
      // borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
      borderWidth: 1,
    },
  ],
};

const options = {
  cutout: '70%', // Adjust the cutout percentage to make it thinner
  plugins: {
    legend: {
      display: false, // Hide the default legend
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          const labelIndex = context.dataIndex;
          return data.labels[labelIndex];
        },
      },
    },
  },
};

const DoughnutChart = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex-shrink-0 w-2/3">
        <Doughnut data={data} options={options} />
      </div>
      <div className="flex-shrink-0 w-1/2">
        {/* Add your labels or any additional content here */}
        <div className="">
          {data.labels.map((label, index) => (
            <div key={index} className="flex items-center mb-2">
              <div
                className={`w-4 h-4 mr-2 rounded-full ${
                  index === 0 ? 'bg-blue-500' : 'bg-orange-500'
                }`}
              ></div>
              <span className='w-[15em]'>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
