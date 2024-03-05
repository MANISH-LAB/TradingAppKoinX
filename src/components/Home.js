import React from 'react';
import Header from './Header';
import TrendingCoins from './TrendingCoins';

const Home = () => {
  

  return (
    <div className='bg-gray-100'>
      <Header />
      
      <TrendingCoins />
      
    </div>
  );
};

export default Home;