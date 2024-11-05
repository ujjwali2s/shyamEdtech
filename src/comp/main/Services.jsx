import React, { useState, useEffect } from "react";
import { CarouselData } from "../../assets/asset"; // Import the CarouselData array

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dataLength = CarouselData().length;

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dataLength);
    }, 3000); // Slides every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [dataLength]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dataLength - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dataLength);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Carousel Images */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {CarouselData().map((item) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
              <div className="text-center py-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-500">{item.short}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

     

    
    </div>
  );
};

export default Carousel;
