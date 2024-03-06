import React from 'react'
import KeyEvents from './KeyEvents'
import AnalystEstimates from './AnalystEstimates'

const SentimentCard = () => {
  return (
    <div className='bg-white w-[65%] m-6 '>
        <h1 className='font-bold text-2xl p-4'>Sentiment</h1>
        <div>
            <KeyEvents/>
        </div>
        <div>
            <AnalystEstimates/>
        </div>
    </div>
  )
}

export default SentimentCard