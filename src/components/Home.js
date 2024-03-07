import React from 'react';
import Header from './Header';
import {Outlet} from "react-router-dom" 
const Home = () => {
  

  return (
    <div className='bg-gray-100'>
      <Header />
      <div className='flex flex-col '>
      
        <Outlet/>
      
      </div>
      
    </div>
  );
};

export default Home;