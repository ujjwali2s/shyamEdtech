import React from "react";
import "./hero.css"; 
import Button from "../../assets/Button";
import { motion } from "framer-motion";

function Hero() {
  const handleClick = () => alert("Button clicked!");

  // Animation variants for text and button
  const textVariants = {
    hidden: { opacity: 0, x: -50 }, // Initial state
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Final state
  };

  const spanVariants = {
    hidden: { opacity: 0, x: 50 }, // Initial state
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Final state
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.5 }, // Initial state
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } }, // Final state
  };

  return (
    <div className="h-[50vh] w-[100vw] bganimate flex items-center justify-center">
      <div className="flex flex-col items-center p-4 text-center">
        <motion.h1
          className="m-5 p-5 text-fuchsia-500 text-4xl md:text-4xl lg:text-6xl w-[50%] max-sm:w-[70%] font-bold leading-tight max-w-3xl"
          initial="hidden"
          animate="visible" // Trigger animation
          variants={textVariants}
        >
          <motion.span
            initial="hidden"
            animate="visible" // Trigger animation
            variants={spanVariants}
            className="text-teal-200"
          >
            Your All IT
          </motion.span> 
          Solutions Are Here
        </motion.h1>
        <motion.div
          initial="hidden"
          animate="visible" // Trigger animation
          variants={buttonVariants}
        >
          <Button 
            href="/about" 
            className="text-white bg-black font-playwrite  transition duration-300 ease-in-out"
            onClick={handleClick}
          >
            Explore More
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
