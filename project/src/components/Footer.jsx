import React from 'react';

import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='dongle-regular max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white'>
      <div>
      <h1 className='w-full text-2xl font-bold text-[#fff]'>CAPISTRANO DISTILLERY</h1>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <ul>
            <li className='py-2 text-md'>About Us</li>
            <li className='py-2 text-md'>Our Products</li>
            <li className='py-2 text-md'>Contact</li>
            <li className='py-2 text-md'>Book an Appointment</li>
        </ul> 
    </div>
  
    <div>
        <h6 className='font-medium'>Follow us</h6>
        <div className='py-4 flex justify-between md:w-[75%] my-6'>
          <ul>
            <li><FaFacebookSquare size={30} /></li>
            <li><FaInstagram size={30} /></li>
            <li>For inquires please contact:</li>
            <li>email@email.com</li>
          </ul>
        </div>
    </div>
      </div>
    </div>
  );
};

export default Footer;