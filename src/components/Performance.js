import React from 'react'
import useGetCoindataChart from '../utils/hooks/useGetCoindataChart'
import Fundamentals from './Fundamentals'
const Performance = ({id}) => {
    return (
        <div>
            <div className='w-[65%] bg-white m-6 p-4'>
        <h1 className='text-3xl font-semibold'>Performance</h1>

           { useGetCoindataChart(id,"24h")}
            {/* {useGetCoindataChart("bitcoin","1y")} */}
            <Fundamentals/>
            </div>
            
        </div>
  )
}

export default Performance