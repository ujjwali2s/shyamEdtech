import React, { useEffect, useState } from 'react';
import { CarouselData } from '../../assets/asset';
import { motion } from 'framer-motion';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = CarouselData(); // Ensuring CarouselData is called as a function

  useEffect(() => {
    if (slides.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 4000); // 4-second interval

      return () => clearInterval(interval);
    }
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-800">
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="min-w-full h-[80vh] flex items-center justify-center relative"
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="absolute w-full h-[80vh] object-cover"
            />
            <div className="relative z-10 flex flex-col items-center text-center p-4 bg-black bg-opacity-40 rounded-lg">
              <motion.h2
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold text-white"
              >
                {slide.title}
              </motion.h2>
              <motion.p
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg text-gray-300 mt-4"
              >
                {slide.short}
              </motion.p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
      >
        ❯
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 flex justify-center w-full">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`mx-1 h-3 w-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
