import React from 'react'
import useGetCoindataChart from '../utils/hooks/useGetCoindataChart'
const Performance = () => {
    return (
        <div>
            <div className='w-[65%] bg-white m-6 p-4'>
        <h1 className='text-3xl font-semibold'>Performance</h1>

           { useGetCoindataChart("bitcoin","24h")}
            {/* {useGetCoindataChart("bitcoin","1y")} */}
            </div>
        </div>
  )
}

export default Performance