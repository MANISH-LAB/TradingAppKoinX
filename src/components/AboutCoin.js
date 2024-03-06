
import React from 'react'


const AboutCoin = () => {

  return (
    <div className='w-[65%] m-6 p-8 bg-white'>
<h1 className='font-semibold text-3xl mb-4'>About Bitcoin</h1>
<h2 className='font-semibold text-2xl'>What is Bitcoin? </h2>
<div className= "rounded-lg ">
      {/* Lorem Ipsum section */}
      <div className="mt-8 text-gray-600 font-semibold border-y-slate-300 border-y-2 py-4">
        <h1 className='text-xl'>Lorem ipsym doler sit amet</h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et
          lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed.
          Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
          pendisse enim facilisi diam ut sed.
        </p>
        <p className="mb-4">
          Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Diam praesent massa dapibus magna
          aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero
          adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui.
          Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc.
          Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis
          lobortis phasellus. Integer pellentesque enim convallis ultricies at.
        </p>
        <p className="mb-4">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi
          adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
        </p>
      </div>

      {/* Already Holding Bitcoin? section */}
      <div className="flex items-center justify-between mt-8">
        <h3 className="text-xl font-semibold">Already Holding Bitcoin?</h3>
        <button className="text-sm font-semibold underline">Calculate your tax liability</button>
      </div>

      {/* Cards section */}
      <div className="grid grid-cols-2 gap-4 mt-8 pb-4 border-b-2 border-slate-300 ">
        {/* Card 1 */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md flex bg-gradient-to-br from-[#77eea4] to-[#1261ad]">
            <div className='w-1/3'>
                <img alt="card" src='/card1.png' className='rounded-md'/>
            </div>
            <div className='p-4'>
            
          <h1 className="text-xl font-semibold mb-2">Calculate your Profits</h1>
          <button className="bg-white text-black font-semibold rounded-md py-2 px-6">Check Now -></button>
            </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md flex bg-gradient-to-br from-[#ff9764] to-[#e93a35]">
        <div className='w-1/3'>
                <img alt="card" src='/card2.png' className='rounded-md'/>
            </div>
            <div className='p-4'>
            
          <h1 className="text-xl font-semibold mb-2">Calculate your tax liability</h1>
          <button className="bg-white text-black font-semibold rounded-md py-2 px-6">Check Now -> </button>
            </div>
        </div>
      </div>
      <p className="my-4 font-semibold">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi
          adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
        </p>
    </div>
    </div>
  )
}

export default AboutCoin