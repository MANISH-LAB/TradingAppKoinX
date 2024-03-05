import React from 'react';
import Header from './Header';
import TrendingCoins from './TrendingCoins';
import TeamSection from './TeamSection';

const Home = () => {
  

  return (
    <div className='bg-gray-100'>
      <Header />
      
      <TrendingCoins />
      <TeamSection/>
      
    </div>
  );
};

export default Home;