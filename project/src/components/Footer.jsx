import React from 'react';
import { Link } from 'react-router-dom';

import {
  FaFacebookSquare,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='dongle-footer max-w-[1240px] mx-auto py-12 px-10 grid lg:grid-cols-3 gap-10 text-white mt-10'>
      <div>
        <h1 className='w-full text-2xl font-bold dongle-bold text-[#fff]'>CAPISTRANO DISTILLERY</h1>
      </div>
      <div className='lg:col-span-2 flex flex-col md:flex-row justify-between'>
        <div className='mb-6 md:mb-0'>
          <ul>

          <Link to="/About" className="hover:underline text-white-600">
                About Us
            </Link>
            <br></br>
            <Link to="/Products" className="hover:underline text-white-600">
                Our Products
            </Link>
            <li className='py-2 text-md'>Book an Appointment</li>

          </ul> 
        </div>
        <div>
          <div className='flex items-center space-x-4 mb-6 md:mb-0'>
            <h6 className='font-medium pr-8'>Follow us:</h6>
            {/* Icons side by side next to heading */}
            <a href="https://m.facebook.com/capistranodistillery/" target="_blank" rel="noopener noreferrer" >
              <FaFacebookSquare size={30} />
              </a>
              <a href="https://www.instagram.com/capistranodistillery?igsh=MTM1MGM1YXRiZ2F2ZQ==" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
              </a>
          </div>
          <ul className='mt-4 text-right max-md:text-left'>
          <li>For inquiries, please contact:</li>
            <li>
              <a
                href="mailto:capistrano_distillery@yahoo.com"
                className="text-white hover:text-blue-600 underline"

              >
              capistrano_distillery@yahoo.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
