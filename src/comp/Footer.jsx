import React from 'react';
import Logo from "../assets/resource/logo.png";
import { Navigation, Social } from '../assets/asset';

const Footer = () => {
  return (
   <div className='flex items-center justify-between w-screen  bg-slate-600'>
    <div className='flex items-center justify-center p-4'>
      <img src={Logo} alt='logo' className='w-[50px] h-[50px] sm:h-[100px] sm:w-[100px]'/>
      
    </div>
    <div className='flex flex-col items-center justify-between p-2 m-2'>
     <div><h2 className='text-red-700'>Menu</h2></div> 
     <div>{Navigation().map((nav)=>(
        <a 
        key={nav.id}
        href={nav.url}
        className=' flex m-2 max-xs:text-xs'
        >{nav.title}</a>

      ))}</div>
    </div>
    <div className='flex flex-col items-center justify-between p-2 m-2'>
      <h2  className='text-red-500 max-xs:text-xs'>Social Media</h2>

      <div className='flex flex-row'>
      {Social().map((soc)=>(
        <a
        key={soc.id}
        href={soc.url}
        className=''
        >
          <img 
          src={soc.src}
           alt={soc.name} 
           className=' w-[40px] h-[40px] p-1 m-0 max-xs:w-[30px] max-xs:h-[30px]'
           />
        </a>
      ))}
      </div>
      

    </div>

   </div>
  );
};

export default Footer;
