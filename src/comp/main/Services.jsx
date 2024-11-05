import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    header: "Majestic Mountains",
    subheader: "Explore the peaks of adventure"
  },
  {
    image: "https://images.unsplash.com/photo-1520962880247-cfaf541c8724",
    header: "Ocean Serenity",
    subheader: "Discover coastal paradise"
  },
  {
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    header: "Forest Whispers",
    subheader: "Nature's hidden secrets"
  },
  {
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    header: "Enchanted Woods",
    subheader: "Journey through mystical paths"
  }
];

export const Carousel = () => {
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
    const headerText = slides[currentIndex].header;
    
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
                src={slide.image}
                alt={slide.header}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="mb-4 text-6xl font-bold">
                  {active ? displayText : slide.header}
                  {active && displayText.length < slide.header.length && (
                    <span className="animate-pulse">|</span>
                  )}
                </h1>
                <p
                  className={`text-2xl transition-opacity duration-1000 ${
                    active && showSubheader ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {slide.subheader}
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
