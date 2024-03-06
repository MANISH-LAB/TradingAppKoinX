import React ,{useEffect}from 'react'
import YourComponent from '../charts/YourComponent'
import { COIN_DATA } from '../constants/APIConstants'

const useGetCoindataChart = (id,range) => {
    const  [data, setData] = React.useState([]);
    
    // Fetch data on component
    const fetchdata= async()=>{
        const data=await fetch(COIN_DATA+range+"&ids="+id);
        const json= await data.json();
         setData(json)
         console.log("this",json)
    }
    useEffect(()=>{fetchdata()},[])
  return  (
        <div className='flex my-4'>
            <div className='py-4'>
                <h1 className='text-2xl'>{range==="24h"?"Today's Low":"52W Low"}</h1>
                <h1 className='text-3xl mt-6'>{data.length>0? (range==="24h"?data[0].low_24h.toLocaleString():data[0].low_1y.toLocaleString()) :"Loading..."} </h1>
            </div>
            <div className='flex-grow px-4 mt-12'>
                <YourComponent LowValue={data.length>0?(range==="24h"?data[0].low_24h:data[0].low_1y): 49867} HighValue={data.length>0?(range==="24h"?data[0].high_24h:data[0].high_1y):46637} CurrentValue={data.length>0?(range==='24h'?data[0].current_price:null):(range!=="24h"? null: 48637)}/>
            </div>
            <div className='py-4'>
                <h1 className='text-2xl'>{range==="24h"?"Today's High":"52W High"}</h1>
                <h1 className='text-3xl mt-6'>{data.length>0?(range==="24h"?data[0].high_24h.toLocaleString():data[0].high_1y.toLocaleString()) :"Loading..."}</h1>
            </div>
        </div>
    
  )
}
export default useGetCoindataChart