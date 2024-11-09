import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Testimonials } from '../../assets/asset';

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const slideInterval = 5000;
  const intervalRef = useRef(null);
  const testimonials = Testimonials();

  useEffect(() => {
    startSlideInterval();
    return () => stopSlideInterval();
  }, []);

  const startSlideInterval = () => {
    stopSlideInterval(); 
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, slideInterval);
  };

  const stopSlideInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="mt-32 p-3">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-10"
      >
        Client Testimonials
      </motion.h2>

      <div className="relative max-w-4xl mx-auto px-4">
        <button
          onClick={() => {
            prevSlide();
            startSlideInterval();
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
        >
          <FiChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => {
            nextSlide();
            startSlideInterval();
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
        >
          <FiChevronRight className="w-6 h-6" />
        </button>

        <div className="overflow-hidden relative h-[400px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={`testimonial-${currentIndex}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex flex-col items-center text-center mb-8">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full object-cover mb-4"
                  />
                  <div>
                    <h4 className="font-bold text-xl">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                    <p className="text-blue-600 font-medium">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 text-lg italic text-center">
                  "{testimonials[currentIndex].content}"
                </blockquote>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
                startSlideInterval();
              }}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
