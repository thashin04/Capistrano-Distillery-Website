import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import '../index.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'About us' },
    { id: 2, text: 'Our Products' },
    { id: 3, text: 'Contact' },
    { id: 4, text: 'Book an Appointment' },
  ];

  return (
    <div className='bg-[#BBC191] flex justify-between items-center h-24 max-w-[100%] mx-auto px-4 text-[#E0C9AC]'>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold text-[#382828]'>CAPISTRANO DISTILLERY</h1>

      {/* Nav Bar */}
      <ul className='hidden md:flex'>
        {navItems.map((item, index) => (
          <li
            key={item.id}
            className={`py-1.5 px-5 rounded-xl m-2 whitespace-nowrap cursor-pointer duration-300 ${
              index > 1 ? 'bg-[#382828] hover:bg-[#724F54]' : ''
            } ${index < 2 ? 'bg-[#BBC191] hover:bg-[#cbd1a2] hover:underline text-[#382828]' : 'text-[#E0C9AC]'}
            `}
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden text-[#382828]'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r color-[#382828] bg-[#BBC191] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#382828] m-4'>CAPISTRANO DISTILLERY</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 px-7 hover:bg-[#6A7339] text-[#382828] hover:text-[#E0C9AC] duration-300 cursor-pointer'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
