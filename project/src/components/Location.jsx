import React from 'react';
import '../index.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";
import map from '../images/map.png'

const Location = () => {
  return (
    <>
      <div className="w-screen"> 
        <div className="flex flex-col lg:flex-row lg:justify-center pt-12 pb-12 items-center lg:w-full mx-auto mt-8 gap-12">
          {/* Text Section */}
          <div className="text-[#E0C9AC] lg:px-12 sm:px-8 space-y-8 flex flex-col items-center lg:items-start pt-0">
          <ScrollAnimation animateIn="fadeIn">
            <h1 className="pb-10 gabarito-header text-center md:text-left lg:text-left text-5xl font-bold">LOCATION</h1>
            <p className='dongle-regular'>Barangay Wakas, Tayabas City, <br />
            Quezon Province, 4327,<br /> 
              Philippines</p>
              </ScrollAnimation>
          </div>

          {/* Map Image Section */}
          <div className="relative w-1/3 sm:w-5/12 lg:w-1/3 lg:order-last">
            <img src={map} alt="map" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
