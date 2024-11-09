import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation, Social } from '../assets/asset';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from "../assets/resource/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = Navigation();
  const social = Social();
  const [hoverIndex, setHoverIndex] = useState(null);

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -50 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  const subitemVariants = {
    closed: { opacity: 0, x: 50 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <nav className="fixed w-full z-50 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold">Shyam<span className='text-red-500'>Ed</span>Tech</div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, i) => (
              <motion.div
                key={item.id}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
                className="relative"
              >
                <a
                  href={item.url}
                  className="hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
                >
                  {item.title}
                </a>
                {hoverIndex === i && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-orange-400 rounded-full"
                    layoutId="underline"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

     
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-gray-900 z-40 flex flex-col items-center justify-center"
          >
            
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white text-3xl focus:outline-none"
              aria-label="Close Menu"
            >
              <FiX />
            </button>
            
          
            <div className="flex flex-col items-center justify-center space-y-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  onMouseEnter={() => setHoverIndex(i)}
                  onMouseLeave={() => setHoverIndex(null)}
                  className="relative"
                >
                  <motion.a
                    href={item.url}
                    custom={i}
                    variants={itemVariants}
                    className="text-xl font-medium hover:text-gray-300 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </motion.a>
                  {hoverIndex === i && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-orange-400 rounded "
                      layoutId="underline"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              ))}
              <div className="flex">
                {social.map((sitem, i) => (
                  <motion.a
                    key={sitem.id}
                    href={sitem.url}
                    custom={i}
                    variants={subitemVariants}
                    className="h-10 w-10 m-4 p-1 font-medium bg-white rounded-2xl hover:bg-orange-400 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <img src={sitem.src} alt={sitem.name} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
