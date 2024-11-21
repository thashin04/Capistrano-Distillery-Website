import React from 'react';
import './index.css';
import "animate.css/animate.compat.css";

const Location = () => {
  return (
    <>
      <div className="w-screen"> 
        <div className="flex flex-col lg:flex-row lg:justify-center pt-12 pb-12 items-center lg:w-full mx-auto mt-8 gap-12">
          <div className="text-[#E0C9AC] lg:px-12 sm:px-8 space-y-8 flex flex-col items-center lg:items-start pt-0">
            <h1 className="lg:pb-10 gabarito-header text-center md:text-left lg:text-left text-5xl font-bold max-sm:text-3xl">LOCATION</h1>
            <p className='dongle-regular'>Barangay Wakas, Tayabas City, <br />
            Quezon Province, 4327,<br /> 
              Philippines</p>
          </div>

          {/* google map section */}
          <div className="rounded-lg overflow-hidden relative max-sm:w-7/12 w-5/12 md:w-4/12 lg:order-last">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d483.9210057910657!2d121.6088979!3d13.9961778!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd4d63aab6a80d%3A0x194efb76a0067026!2sCapistrano%20Distillery!5e0!3m2!1sen!2sus!4v1731990203433!5m2!1sen!2sus"
              width="100%"
              height="300px"
              className="rounded-xl"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="auto"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
