import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
const CryptoSelector = () => {
  const [selectedCrypto, setSelectedCrypto] = useState('');
  const navigate=useNavigate();
  const handleSelect = (crypto) => {
    setSelectedCrypto(crypto);
  };

  const handleGo = () => {
    const id=selectedCrypto.toLowerCase();
    navigate('/cryptocurrency/'+id)
    // Add logic to navigate or perform actions based on the selectedCrypto
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Select a cryptocurrency</h1>
      <div className="flex space-x-4">
        <button onClick={() => handleSelect('Bitcoin')} className={selectedCrypto === 'Bitcoin' ? 'bg-blue-500 text-white px-4 py-2 rounded' : 'bg-gray-300 text-gray-700 px-4 py-2 rounded'}>
          Bitcoin
        </button>
        <button onClick={() => handleSelect('Ethereum')} className={selectedCrypto === 'Ethereum' ? 'bg-blue-500 text-white px-4 py-2 rounded' : 'bg-gray-300 text-gray-700 px-4 py-2 rounded'}>
          Ethereum
        </button>
        <button
          onClick={handleGo}
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={!selectedCrypto}
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default CryptoSelector;
