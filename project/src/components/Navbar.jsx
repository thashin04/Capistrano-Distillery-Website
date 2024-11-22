import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom'; 
import './index.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation(); // Hook to access the current location

  const handleNav = () => {
    setNav(!nav);
  };

  // Scroll to top on location change
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, [location]);

  const navItems = [
    { id: 1, text: 'HOME', path: '/' },
    { id: 2, text: 'ABOUT US', path: '/about' },
    { id: 3, text: 'OUR PRODUCTS', path: '/products' },
    { id: 4, text: 'CONTACT', href: 'mailto:info@capistranodistillery.com' },
    { id: 5, text: 'BOOK AN APPOINTMENT', path: '/appointment' },
  ];

  return (
    <div className='bg-[#BBC191] z-50 sticky top-0 flex justify-between items-center h-24 w-full mx-auto px-4 text-[#E0C9AC]'>
      {/* Logo */}
      <h1 className='gabarito-normal gabarito-small pr-8 w-full text-2xl font-bold text-[#382828]'>
        <Link to="/">CAPISTRANO DISTILLERY</Link>
      </h1>

      {/* Nav Bar */}
      <ul className='dongle-regular dongle-small hidden md:flex'>
        {navItems.map((item, index) => (
          <li
            key={item.id}
            className={`py-1 px-5 rounded-xl my-2 mx-1 max-md: whitespace-nowrap cursor-pointer duration-300 ${
              index > 2 ? 'bg-[#382828] lg:mx-2 hover:bg-[#724F54]' : ''
            } ${index < 3 ? 'lg:px-5 md:px-2 px-1 bg-[#BBC191] hover:underline text-[#382828]' : 'text-[#FAF5F0]'}
            `}
          >
            {item.path ? (
              <Link to={item.path}>{item.text}</Link>
            ) : (
              <a href={item.href}>{item.text}</a>
            )}
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
            className='dongle-regular dongle-small p-4 px-7 hover:bg-[#6A7339] text-[#382828] hover:text-[#E0C9AC] duration-300 cursor-pointer'
          >
            {item.path ? (
              <Link to={item.path}>{item.text}</Link>
            ) : (
              <a href={item.href}>{item.text}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
