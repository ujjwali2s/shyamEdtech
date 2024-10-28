import React, { useState } from 'react';
import { Contact, Navigation } from "../assets/asset"; // Ensure this path is correct
import Logo from "../resource/logo.png";
import Menu from "../resource/list.png";
import Close from "../resource/close.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Initialize to false
  const [active, setActive] = useState('');

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleOnClick = (nav) => {
    setActive(nav.title);
    setMenuOpen(false);
  };

  return (
    <div className='flex navs-center justify-between p-4 m-0 w-screen'>
      <div className='flex w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]'>
        <img src={Logo} alt="logo" />
      </div>
      <div className='hidden sm:flex m-2'>
        {Navigation().map((nav) => (
          <a
            key={nav.id}
            href={nav.url}
            className={`m-3 ${active === nav.title ? 'text-green-500' : 'text-black hover:text-rose-600'}`}
            onClick={() => handleOnClick(nav)} // Call handleOnClick
          >
            {nav.title}
          </a>
        ))}
        <div className='flex'>
          {Contact().map((cont) => (
            <a
              key={cont.id}
              href={cont.url}
              className={`block w-5 h-5 text-black hover:text-xl  m-1 ${active === cont.title ? 'font-bold text-red-500' : ''}`}
            >
              <img src={cont.src} alt={cont.name} />
            </a>
          ))}
        </div>
      </div>
      <div className='flex sm:hidden'>
        <img
          src={menuOpen ? Close : Menu}
          alt='menu'
          onClick={handleMenuToggle}
          className='w-[30px] h-[30px] max-xs:w-[20px] max-xs:h-[20px]'
        />
      </div>

      {menuOpen && (
        <div className='absolute top-16 right-0 bg-gray-800 w-3/6 h-4/4 p-4 sm:hidden'>
          {Navigation().map((nav) => (
            <a
              key={nav.id}
              href={nav.url}
              className={`block text-white hover:text-blue-600 m-5 ${active === nav.title ? 'font-bold text-green-500' : ''}`}
              onClick={() => handleOnClick(nav)} // Call handleOnClick
            >
              {nav.title}
            </a>
          ))}
          <div className='flex'>
            {Contact().map((cont) => (
              <a
                key={cont.id}
                href={cont.url}
                className={`block w-9 h-9 text-white hover:text-blue-600 max-xs:w-[20px] max-xs:h-[20px] m-2 ${active === cont.title ? 'font-bold text-red-500' : ''}`}
              >
                <img src={cont.src} alt={cont.name} />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
