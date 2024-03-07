import React, { useState, useEffect } from 'react';
import { COIN_PRICE } from '../utils/constants/APIConstants';
import { useSelector } from 'react-redux';
import { TiArrowSortedUp } from 'react-icons/ti';
import TradingViewWidget from './TradingViewWidget';

const TopPage = ({ id }) => {
  const [coinPrice, setCoinPrice] = useState(null);
  const store = useSelector((store) => store.ChosenCrypto.data);
  const { name, symbol, current_price, image, market_cap_rank } = store || {};

  const fetchdata = async () => {
    const response = await fetch(COIN_PRICE + id);
    const data = await response.json();
    setCoinPrice(data);
  };

  useEffect(() => {
    fetchdata();
  }, [id]);

  return coinPrice!==null? (
    <div className="p-8 bg-white shadow-md w-[65%] m-6">
      <div className="flex items-center gap-4">
        <img src={image} alt="symbol" className="h-16 w-16 rounded-full" />
        <span className="text-2xl font-bold">{name}</span>
        <span className="text-gray-500 font-semibold">{symbol}</span>
        <span className="bg-gray-200 px-3 py-1 rounded-md">Rank # {market_cap_rank}</span>
      </div>
      <div className="flex  mt-6">
        <div className='mr-4'>
          <p className="text-4xl font-bold">$ {coinPrice.usd}</p>
          <p className="text-xl font-semibold text-gray-500">₹ {coinPrice.inr}</p>
        </div>
        <span className="bg-green-500  px-2 h-[32px] rounded-md flex items-center">
          <TiArrowSortedUp className="text-green-200" />
          <span className="text-xs font-semibold ">2.51%</span>
        </span>
        <span className='text-gray-600 px-4'>(24h)</span>
      </div>
      <div>
        <TradingViewWidget id={id}/>
      </div>
    </div>
  ):null;
};

export default TopPage;