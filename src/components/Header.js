import React from 'react';
const Header = () => {
  return (
    <header className=" bg-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <img src="https://app.koinx.com/static/media/Logo.3331aa2fc2f35c00e58921b44a2ebf0d.svg" className='h-[70px] w-[100px]' alt="Logo" />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
            
               <p className='font-semibold p-2 cursor-pointer'> Crypto Taxes </p>
              
            </li>
            <li>
            <p className='font-semibold p-2'> 
                Free Tools</p>
              
            </li>
            <li>
            <p className='font-semibold p-2'> 
                Resource Center
              </p>
            </li>
            <li>
                
                    <button className='bg-blue-500 text-white font-semibold rounded-lg p-2'>Get Started</button>
                
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header