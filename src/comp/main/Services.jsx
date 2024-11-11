import { useState, useEffect } from 'react';
import {CarouselData} from "../../assets/asset.js"


 const Carousel = () => {
  const slides = CarouselData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showSubheader, setShowSubheader] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setDisplayText('');
    setShowSubheader(false);
    let currentText = '';
    const headerText = slides[currentIndex].title;
    
    const typeInterval = setInterval(() => {
      if (currentText.length < headerText.length) {
        currentText = headerText.slice(0, currentText.length + 1);
        setDisplayText(currentText);
      } else {
        clearInterval(typeInterval);
        setShowSubheader(true);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => {
        const offset = index - currentIndex;
        const active = index === currentIndex;

        return (
          <div
            key={index}
            className={`absolute top-0 h-full w-full transition-transform duration-500 ease-out`}
            style={{
              transform: `translateX(${offset * 100}%)`,
              zIndex: active ? 10 : 0,
            }}
          >
            <div className="relative h-full w-full">
              <img
                src={slide.img}
                alt={slide.title}
                className="h-full w-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-black/60 snap-align-none"  />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white overflow-auto">
                <h2 className="mb-4 md:text-4xl text-xl  font-bold  snap-align-none">
                  {active ? displayText : slide.title}
                  {active && displayText.length < slide.title.length && (
                    <span className="animate-pulse">|</span>
                  )}
                </h2>
                <p
                  className={`md:text-2xl text-sm transition-opacity duration-1000 md:w-3/4 w-4/5
                  }`}
                >
                  {slide.short}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default Carousel;
 