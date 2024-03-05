import React from 'react';
import Header from './Header';
import TrendingCoins from './TrendingCoins';
import TeamSection from './TeamSection';
import Tokenomics from './Tokenomics';
import AboutCoin from './AboutCoin';
import GetStarted from './GetStarted';

const Home = () => {
  

  return (
    <div className='bg-gray-100'>
      <Header />
      
      <TrendingCoins />
      {/* <AboutCoin/> */}
      <Tokenomics/>
      <TeamSection/>
      <GetStarted/>
      
    </div>
  );
};

export default Home;