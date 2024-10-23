import React, { useState } from 'react';
import { Navigation } from "../assets/asset"; // Ensure this path is correct
import Logo from "../resource/logo.png";
import Menu from "../resource/list.png";
import Close from "../resource/close.png";

const Navbar = () => {
 const [menuOpen,setMenuOpen]= useState();
 const [active,setActive]=useState();

 const handleMenuToggle =()=>{
  setMenuOpen(!menuOpen)
 }
 const handleOnClick =(item)=>{
setActive(item.title);
setMenuOpen(false)
 }

  return (
   <div className='flex items-center justify-between p-4 m-0 w-full'>
    <div className='flex w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]'>
      <img src={Logo} alt="logo" />
    </div>
    <div className='hidden sm:flex m-2' >
      {Navigation().map((item)=>(
        <a 
        key={item.id}
        href={item.url}
        className="m-3 hover:text-rose-600"
        >{item.title}</a>
      ))
      }

    </div>
    <div className='flex sm:hidden'>
      <img
      src={menuOpen ? Close : Menu}
      alt='menu'
    onClick={handleMenuToggle}
      className='w-[30px] h-[30px]'
      />
    </div>
    
{menuOpen && (
  <div className='absolute top-16  right-0 bg-gray-800 w-3/6 h-4/4 p-4 sm:hidden'>
  {Navigation().map((item)=>(
    <a 
    key={item.id}
    href={item.url}
    className={`block text-white hover:text-blue-600 m-5  ${active === item.title ? 'font-bold text-red-500' : ''}`}
    >{item.title}</a>
  ))
  }
  </div>
  )}
    </div>

   
  );
};

export default Navbar;
