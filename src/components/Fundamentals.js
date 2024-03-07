import React from 'react'
import {useSelector} from "react-redux";
const Fundamentals = () => {
  const store=useSelector(store=> store.ChosenCrypto.data)
    const {name,symbol, current_price,price_change_percentage_24h,total_volume
    , price_change_percentage_7d_in_currency, circulating_supply,total_supply,high_24h,low_24h} =store || {}
    const coinInfo = {
      price: '$'+current_price.toFixed(2),
      '24hLow/24hHigh': '$'+low_24h+ '/'+ '$'+high_24h,
      '7dLow/7dHigh': '$16,382.07 / $16,874.12',
      'trading Volume': '$23,249,202,782',
      'Market Cap Rank': '#1',
      'Market Cap': '$323,507,290,047',
      'Market Cap Dominance': '38.343%',
      'volume/Market Cap': '0.0718',
      'All-Time-High': {
        value: '$69,044.77',
        date: 'Nov 10, 2021 (about 1 year)',
      },
      'All-Time-Low': {
        value: '$67.81',
        change: '24729.1%',
        date: 'Jul 06, 2013 (over 9 years)',
      },
    };
  return (
    <div>
      <h1 className='font-semibold text-2xl'>Fundamentals</h1>
      <div className='my-4'>
         
         <div>

         </div>
      </div>
    </div>
  )
}

export default Fundamentals