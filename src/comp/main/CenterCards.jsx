import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import Button from '../../assets/Button';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = [
    'Website Development',
    'Application Development',
    'Graphic Design',
    'Digital Marketing',
    'Brand Promotion'
  ];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % textArray.length;
      const fullText = textArray[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 100 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-1">
        <div 
          className="h-full w-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] 
                     opacity-90 bg-black bg-cover bg-center transform scale-105 animate-slow-zoom"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div 
              className="inline-block px-4 py-2 bg-indigo-900/50 rounded-full 
                         border border-indigo-700/30 backdrop-blur-sm"
            >
              <span className="text-yellow-400 font-semibold">DIGITAL SOLUTIONS</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Transform Your<br />
              Business With<br />
              <span className="text-yellow-400 min-h-[80px] block mt-2">
                {text}
                <span className="typing-cursor" />
              </span>
            </h1>
            
            <p className="text-gray-300 text-lg max-w-xl">
              Elevate your digital presence with our comprehensive solutions that drive growth,
              innovation, and success in the modern business landscape.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button href="/contact">Get Started</Button>
                
              
              <Button className="btn-secondary flex items-center gap-2 bg-white p-2 rounded-lg " href="/about">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-400/80 to-indigo-600/20 rounded-lg transform rotate-6 scale-105" />
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
                alt="Digital Solutions Illustration"
                className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;