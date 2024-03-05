import React ,{useState,useEffect} from 'react';
import { DEMO_API_KEY,BASE_URL } from '../utils/constants/APIConstants';
const TrendingCoins = () => {
    const [coins,setCoins]=useState([]);
    const options = {method: 'GET', headers: {'x-cg-demo-api-key': DEMO_API_KEY}};

    useEffect(()=>{
                
        fetch(BASE_URL+'/search/trending', options)
        .then(response => response.json())
        .then(response => {console.log(response)
        setCoins(response.coins);
        console.log(coins.item.thumb)
        })
        .catch(err => console.error(err));

    },[])

  return coins.length>0 ?(
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Trending Coins (24h)</h2>
        <div className="flex flex-wrap -mx-3">
    
          {coins.slice(0,3).map((coin, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/3 px-3 mb-6">
              <article className="h-full shadow-lg rounded-lg overflow-hidden">
                <div className="bg-blue-500 text-white p-4">
                  <img className="mb-2" src={coin.item.thumb} alt="logo"/>
                  <p className="text-sm">{coin.item.symbol}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">Price: {coin.item.data.price}</p>
                  <p className="text-gray-700">Change: {coin.change}%</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  ):null;
};

export default TrendingCoins;