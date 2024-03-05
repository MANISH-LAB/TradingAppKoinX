import React from 'react';
import Header from './Header';
import TrendingCoins from './TrendingCoins';
import TeamSection from './TeamSection';
import Tokenomics from './Tokenomics';

const Home = () => {
  

  return (
    <div className='bg-gray-100'>
      <Header />
      
      <TrendingCoins />
      <Tokenomics/>
      <TeamSection/>
      
    </div>
  );
};

export default Home;