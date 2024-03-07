import React from 'react'

import TrendingCoins from './TrendingCoins';
import TeamSection from './TeamSection';
import Tokenomics from './Tokenomics';
import AboutCoin from './AboutCoin';
import GetStarted from './GetStarted';
import SentimentCard from './SentimentCard';
import Performance from './Performance';
import { useParams } from 'react-router-dom';
import TopPage from './TopPage';
const CryptoComponent = () => {
    const {id}=useParams();
    
  return (
    <div>
        <TopPage id={id}/>
      <Performance id={id}/>
        <SentimentCard/>
      <Tokenomics/>
      <GetStarted/>
      <TrendingCoins />
      <AboutCoin id={id}/>
      
      <TeamSection/>

    </div>
  )
}

export default CryptoComponent