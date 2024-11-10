import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Contact' },
    { id: 2, text: 'Book Appointment' },
    { id: 3, text: 'About us' },
    { id: 4, text: 'Our Products' },
  ];

  return (
    <div className='bg-[#BBC191] flex justify-between items-center h-24 max-w-[100%] mx-auto px-4 text-[#E0C9AC]'>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold text-[#724F54]'>CAPISTRANO DISTILLERY</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 bg-[#724F54] hover:bg-[#382828] rounded-xl m-2 cursor-pointer duration-300'
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r bg-[#BBC191] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#724F54] m-4'>CAPISTRANO DISTILLERY</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#6A7339] text-[#724F54] hover:text-[#E0C9AC] duration-300  cursor-pointer'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;