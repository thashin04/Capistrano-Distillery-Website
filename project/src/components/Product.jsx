import React, { useState, useEffect } from 'react';
import './index.css';
import "animate.css/animate.compat.css";
import FlipCard from './FlipCard';


const Product = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768); 
    };

    checkScreenSize(); 
    window.addEventListener('resize', checkScreenSize); 

    return () => window.removeEventListener('resize', checkScreenSize); 
  }, []);

  return (
    <div className="bg-[#6A7339] w-screen"> 
      <div className="flex flex-col pt-12 pb-12 items-center lg:w-full mx-auto mt-8 gap-8">
        <div className="text-[#FAF5F0] lg:px-12 sm:px-8 space-y-8 flex flex-col items-center lg:items-start pt-0">
          
            <h1 className="gabarito-header text-center lg:text-left max-sm:text-3xl text-5xl font-bold">OUR PRODUCTS</h1>
          
          <div className="flex flex-col lg:flex-row justify-center items-center w-full px-8 lg:px-0 md:pt-8 pb-8 gap-12">
            <div className="w-full lg:w-auto flex flex-col items-center card-hover">
              <FlipCard />
              <p className="text-[#FAF5F0] text-lg mt-4 gabarito-regular">NAME</p>
            </div>
            <div className="w-full lg:w-auto flex flex-col items-center card-hover">
              <FlipCard />
              <p className="text-[#FAF5F0] text-lg mt-4 gabarito-regular">NAME</p>
            </div>
            <div className="w-full lg:w-auto flex flex-col items-center card-hover">
              <FlipCard />
              <p className="text-[#FAF5F0] text-lg mt-4 gabarito-regular">NAME</p>
            </div>
          </div>
          <div className="w-full flex justify-center lg:justify-end">
            <button className="duration-300 text-[#FAF5F0] gabarito-regular border border-[#FAF5F0] py-2 px-4 rounded-md hover:bg-[#FAF5F0] hover:text-[#3F3D35]">
              SEE ALL PRODUCTS →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
