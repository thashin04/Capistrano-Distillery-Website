import React from 'react';
import './index.css';
import aboutplaceholder from '../images/AboutPlaceholder.png';

const ProductAvailability = () => {
  return (
    <div className="text-[#E0C9AC] flex flex-col lg:flex-row items-center justify-center gap-8 pb-12 mx-auto lg:w-3/4 mt-4">
      <div className="flex flex-col gap-8 lg:max-w-[50%]">
        <p className="dongle-regular mr-7 max-lg:max-w-md text-left max-lg:mx-14">
        Capistrano Distillery products are available at their physical store in Barangay Wakas, Tayabas City, Quezon province and also at any SM Kultura branches.
        </p>
      </div>
      <div className="flex-shrink-0 relative mt-12 max-md:mt-4 sm:w-1/3 lg:w-5/12 max-md:mx-14 max-sm:1/4 ">
        <img src={aboutplaceholder} alt="about" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default ProductAvailability;
