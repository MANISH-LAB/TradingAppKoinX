import React from 'react'
import KeyEvents from './KeyEvents'
import AnalystEstimates from './AnalystEstimates'

import { IoIosInformationCircle } from "react-icons/io";


const SentimentCard = () => {
  return (
    <div className='bg-white w-[65%] m-6 '>
        <h1 className='font-semibold text-3xl p-4'>Sentiment</h1>
        <div>
        <h1 className='p-4 font-bold text-lg flex text-gray-600'>Key Events <IoIosInformationCircle className='mt-1 ml-2' /></h1>
        <div className='flex'>
            <KeyEvents bgColor='#e8f4fd' iconBgColor='#0082ff'/>
            <KeyEvents bgColor='#ebf9f4' iconBgColor='#0fba83'/>
        </div>
        </div>
        <div>
        <h1 className='p-4 text-lg flex font-bold text-gray-600'>Analyst Estimates <IoIosInformationCircle className='mt-1 ml-2' />
        </h1>
            <AnalystEstimates/>
        </div>
    </div>
  )
}

export default SentimentCard