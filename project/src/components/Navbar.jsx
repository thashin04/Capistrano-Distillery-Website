import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import '../index.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'ABOUT US' },
    { id: 2, text: 'OUR PRODUCTS' },
    { id: 3, text: 'CONTACT' },
    { id: 4, text: 'BOOK AN APPOINTMENT' },
  ];

  return (
    <div className='bg-[#BBC191] z-50 sticky top-0 flex justify-between items-center h-24 max-w-[100%] mx-auto px-4 text-[#E0C9AC]'>
      {/* Logo */}
      <h1 className='gabarito-header w-full text-2xl font-bold text-[#382828]'>CAPISTRANO DISTILLERY</h1>

      {/* Nav Bar */}
      <ul className='dongle-regular hidden md:flex'>
        {navItems.map((item, index) => (
          <li
            key={item.id}
            className={`py-1 px-5 rounded-xl m-2 whitespace-nowrap cursor-pointer duration-300 ${
              index > 1 ? 'bg-[#382828] hover:bg-[#724F54]' : ''
            } ${index < 2 ? 'px-1 bg-[#BBC191] hover:underline text-[#382828]' : 'text-[#E2E2E2]'}
            `}
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div onClick={handleNav} className='block md:hidden text-[#382828]'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Nav */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r color-[#382828] bg-[#BBC191] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='gabarito-header w-full text-2xl font-bold text-[#382828] m-4'>CAPISTRANO DISTILLERY</h1>

        {/* Mobile Nav Text */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='dongle-regular p-4 px-7 hover:bg-[#6A7339] text-[#382828] hover:text-[#E0C9AC] duration-300 cursor-pointer'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
