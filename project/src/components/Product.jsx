import React, { useState, useEffect } from 'react';
import '../index.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";
import FlipCard from './FlipCard';

const Product = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Set your breakpoint here (768px for tablets and smaller)
    };

    checkScreenSize(); // Initial check
    window.addEventListener('resize', checkScreenSize); // Listen for resize events

    return () => window.removeEventListener('resize', checkScreenSize); // Cleanup listener on unmount
  }, []);

  return (
    <div className="bg-[#6A7339] w-screen"> 
      <div className="flex flex-col pt-12 pb-12 items-center lg:w-full mx-auto mt-8 gap-8">
        <div className="text-[#E0C9AC] lg:px-12 sm:px-8 space-y-8 flex flex-col items-center lg:items-start pt-0">
          {isSmallScreen ? (
            <h1 className="gabarito-header text-center lg:text-left text-5xl font-bold">OUR PRODUCTS</h1>
          ) : (
            <ScrollAnimation animateIn="fadeIn">
              <h1 className="gabarito-header text-center lg:text-left text-5xl font-bold">OUR PRODUCTS</h1>
            </ScrollAnimation>
          )}
          <div className="flex flex-col lg:flex-row justify-center items-center w-full px-8 lg:px-0 pt-8 pb-8 gap-12">
            <div className="w-full lg:w-auto flex flex-col items-center card-hover">
              <FlipCard />
              <p className="text-[#E0C9AC] text-lg mt-4 gabarito-regular">NAME</p>
            </div>
            <div className="w-full lg:w-auto flex flex-col items-center card-hover">
              <FlipCard />
              <p className="text-[#E0C9AC] text-lg mt-4 gabarito-regular">NAME</p>
            </div>
            <div className="w-full lg:w-auto flex flex-col items-center card-hover">
              <FlipCard />
              <p className="text-[#E0C9AC] text-lg mt-4 gabarito-regular">NAME</p>
            </div>
          </div>
          <div className="w-full flex justify-center lg:justify-end">
            <button className="duration-300 text-[#E0C9AC] gabarito-regular border border-[#E0C9AC] py-2 px-4 rounded-md hover:bg-[#E0C9AC] hover:text-[#3F3D35]">
              SEE ALL PRODUCTS →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
