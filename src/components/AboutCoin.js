
import React,{useState, useEffect} from 'react'
import { BITCOIN_DATA } from '../utils/constants/APIConstants';

const AboutCoin = () => {
    const [coinData, setCoinData] =useState([]);
    
    const fetchdata=async ()=>  {
        const data= await fetch(BITCOIN_DATA);
        const json =await data.json();
        setCoinData(json);
        console.log(coinData[0]);
    }
    useEffect(()=>
    fetchdata()
,[]);
  return coinData.length>0?(
    <div>
<h1>About {coinData[0].id}</h1>
<h2>What is {coinData[0].id}?</h2>
    </div>
  ):(<div>Loading..</div>)
}

export default AboutCoin