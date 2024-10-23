// import React, { useState } from 'react';
// import { Navigation } from "../assets/asset"; // Ensure this path is correct
// import Logo from "../resource/logo.png";
// import Menu from "../resource/list.png";
// import Close from "../resource/close.png";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [active, setActive] = useState('');

//   const handleMenuToggle = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleOnClick = (item) => {
//     setActive(item.title);
//     setMenuOpen(false); 
//   };

//   return (
//     <div className='relative flex items-center justify-between p-4 bg-gray-800 text-white'>
//       <div className='flex items-center'>
//         <img src={Logo} alt="logo" className='h-[50px] w-[50px] md:h-[100px] md:w-[100px]' />
//       </div>

//       <div className='hidden sm:flex items-center space-x-4'>
//         {Navigation().map((item) => (
//           <a
//             key={item.id}
//             href={item.url}
//             onClick={() => handleOnClick(item)}
//             className={`mr-4 text-white hover:text-blue-600 ${active === item.title ? 'font-bold text-red-500' : ''}`}
//           >
//             {item.title}
//           </a>
//         ))}
//       </div>

      
//       <div className='sm:hidden'>
//         <img
//           src={menuOpen ? Close : Menu}
//           alt='menu toggle'
//           onClick={handleMenuToggle}
//           className='cursor-pointer w-[30px] h-[30px] text-black'
//           role="button"
//         />
//       </div>

     
//       {menuOpen && (
//         <div className='absolute top-20  right-0 bg-gray-800 w-2/6 h-4/4 p-4 sm:hidden'>
//           {Navigation().map((item) => (
//             <a
//               key={item.id}
//               href={item.url}
//               onClick={() => handleOnClick(item.title)}
//               className={`block text-white hover:text-blue-600 m-5 font-grotesk ${active === item.title ? 'font-bold text-red-500' : ''}`}
//             >
//               {item.title}
//             </a>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
import React from 'react'

const Footer = () => {
  return (
    <div>
      
    </div>
  )
}

export default Footer
