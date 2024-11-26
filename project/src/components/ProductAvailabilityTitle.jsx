import React from 'react';
import './index.css';
import "animate.css/animate.compat.css";

const ProductAvailabilityTitle = () => {
  return (
    <>
      <div className='m-0 w-full'> 
        <div className=" first-line:flex flex-col lg:flex-row lg:justify-center items-center lg:w-full mx-auto">
          <div className="text-[#E0C9AC] max-sm:px-8 flex flex-col items-center pt-0">
            <h1 className="p-8 w-screen text-center gabarito-header text-5xl font-bold max-sm:text-3xl 2xl:text-6xl ">PRODUCT AVAILABILITY</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductAvailabilityTitle;
