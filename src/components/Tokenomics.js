import React from 'react'
// import WheelPieChart from '../utils/charts/DoughnutChart'
import DoughnutChart from '../utils/charts/DoughnutChart'

const Tokenomics = () => {
  return (
    <div className='bg-white w-[65%] p-4 m-6'>
      <h1 className='font-bold text-3xl my-2'>Tokenomics</h1>
        <div>
        <h2 className='font-bold text-2xl py-2 my-2'>Initial Distribution</h2>
        </div>
        <div className='flex'>
            <DoughnutChart/>
        </div>
        <div className='my-2 text-gray-700 text-lg'>
            <p>Ad deserunt nostrud proident irure consequat occaecat. Occaecat anim do proident excepteur incididunt. Dolor velit aliquip commodo elit duis do consequat id dolor culpa qui. Cillum laboris reprehenderit sint aliquip adipisicing elit ullamco. Eu ullamco sit culpa minim laborum.Eu non aliqua dolore fugiat pariatur ullamco eiusmod esse ut. Anim elit adipisicing dolore qui laboris reprehenderit proident culpa sunt excepteur sint ea eu. Enim nulla veniam adipisicing officia voluptate ad.</p>
        </div>
        </div>
  )
}

export default Tokenomics