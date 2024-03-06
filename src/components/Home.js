import React from 'react';
import Header from './Header';
import TrendingCoins from './TrendingCoins';
import TeamSection from './TeamSection';
import Tokenomics from './Tokenomics';
import AboutCoin from './AboutCoin';
import GetStarted from './GetStarted';
import SentimentCard from './SentimentCard';
import Performance from './Performance';

const Home = () => {
  

  return (
    <div className='bg-gray-100'>
      <Header />
      <div className='flex flex-col '>
        <Performance/>
        <SentimentCard/>
      <Tokenomics/>
      <GetStarted/>
      <TrendingCoins />
      <AboutCoin/>
      
      <TeamSection/>
      
      </div>
      
    </div>
  );
};

export default Home;