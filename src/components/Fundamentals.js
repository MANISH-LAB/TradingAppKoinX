import React from 'react'
import {useSelector} from "react-redux";
import { IoIosInformationCircle } from "react-icons/io";
const Fundamentals = () => {
  const store=useSelector(store=> store.ChosenCrypto.data)
    const {name,symbol, current_price,ath,ath_date,atl,atl_date,atl_change_percentage,
      ath_change_percentage,total_volume
    , circulating_supply,total_supply,high_24h,low_24h,market_cap_rank,market_cap} =store || {}
    let coinInfo={}
    if(store){
     coinInfo = {
      price: '$'+current_price,
      '24hLow/24hHigh': '$'+low_24h.toLocaleString()+ '/ $'+high_24h.toLocaleString(),
      '7dLow/7dHigh': '$'+low_24h.toLocaleString()+ '/ $'+high_24h.toLocaleString(),
      'trading Volume': '$'+total_volume.toLocaleString(),
      'Market Cap Rank': '#'+ market_cap_rank,
      'Market Cap': '$'+market_cap.toLocaleString(),
      'Market Cap Dominance': '38.343%',
      'volume/Market Cap': '0.0718',
      'All-Time-High': {
        value: '$'+ath.toLocaleString(),
        change:ath_change_percentage.toFixed(1)+"%",
        date: ath_date,
      },
      'All-Time-Low': {
        value: '$'+atl.toLocaleString(),
        change: atl_change_percentage.toFixed(1)+'%',
        date: atl_date,
      },
    };}
    function formatDate(dateString) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
    
      const currentDate = new Date();
      const yearsDiff = currentDate.getFullYear() - new Date(dateString).getFullYear();
    
      return `${formattedDate} (about ${yearsDiff} ${yearsDiff === 1 ? 'year' : 'years'})`;
    }
  const renderInfo = () => {
    return Object.entries(coinInfo).map(([key, value]) => {
      if (key === 'All-Time-High' || key === 'All-Time-Low') {
        return (
          <div key={key} className='border-b-1 border-gray-300 pb-4 flex justify-between'>
            <p className='font-semibold text-[#768396]'>{key}:</p>
            <div className='items-end'>
            <span className='font-bold pr-2 '>{value.value}</span>  
            {key === 'All-Time-High' ? (
              ath_change_percentage > 0 ? (
                <span className='text-green-500 font-semibold '>{value.change}</span>
              ) : (
                <span className='font-semibold text-[#f96579] '>{value.change}</span>
              )
            ) : (
              atl_change_percentage > 0 ? (
                <span className='font-semibold text-green-500 '>{value.change}</span>
              ) : (
                <span className='font-semibold text-[#f96579] '>{value.change}</span>
              )
            )}
              <p className='font-semibold'>
              {formatDate(value.date)}
              </p>
            </div>
          </div>
        ); 
      } else {
        return (
          <div key={key} className='border-b-2 border-[#768396] flex justify-between'>
            <p className='font-semibold text-[#768396]'>{key}:</p>
            <p className='font-bold'>{value}</p>
          </div>
        );
      }
    });
  };

  return (
    <div className='w-full bg-white mx-1'>
      <h1 className='font-semibold text-2xl py-6 flex'>Fundamentals <IoIosInformationCircle className='mt-1 ml-2 text-gray-400' /></h1>
      <div className='p-1'>
        <div className='grid grid-cols-2 gap-4'>
          {renderInfo()}
        </div>
      </div>
    </div>
  )
}

export default Fundamentals