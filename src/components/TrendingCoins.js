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
    <section className="bg-gray-100 py-12 ">
      <div className="container ml-auto w-[27%] bg-white rounded-md">
        <h2 className="text-2xl font-bold text-center my-4 py-4">Trending Coins (24h)</h2>
      
    
          {coins.slice(0,3).map((coin, index) => (
            <div key={index} className=" w-[100%] px-3 mb-6">
              <ul className="h-full  flex  justify-between rounded-lg overflow-hidden">
                <li className='flex'>
                  <img className="mb-2" src={coin.item.thumb} alt="logo"/>
                  <p className="text-sm p-2">{coin.item.symbol}</p>
                </li>
                <li className="p-6">
                  <p className="text-gray-700">Price: {coin.item.data.price}</p>
                  {/* <p className="text-gray-700">Change: {coin.change}%</p> */}
                </li>
              </ul>
            </div>
          ))}
        </div>
      
    </section>
  ):null;
};

export default TrendingCoins;