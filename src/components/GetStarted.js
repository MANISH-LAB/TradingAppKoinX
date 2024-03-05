import React from 'react';

const GetStarted = () => {
  return (
    <div className='bg-[rgba(0,82,254,255)] m-4 h-[600px] w-[27%] flex flex-col items-center text-white text-center rounded-lg'>
      <h1 className='font-bold text-2xl m-4 p-8'>Get Started With KoinX For Free</h1>
      <img alt="hi" className='h-[200px] mb-4' src='/helperimg.png' />
      <p className='p-8'>With our range of features that you can equip for free, Koinx allows you to be more educated and aware of your tax reports</p>
      <button className='rounded-md p-4 w-2/3 bg-white font-semibold text-blue-500 hover:bg-gray-400 hover:transform hover:-translate-y-1 hover:shadow-md transition-all duration-300 hover:text-white'>Get Started For Free ➡️</button>
    </div>
  );
};

export default GetStarted;
