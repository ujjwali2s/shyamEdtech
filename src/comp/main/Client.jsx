import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Clients } from '../../assets/asset';

const ClientSlider = () => {
  const clients =Clients();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Automatically cycle through slides every 2 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [clients.length]);

  // Calculate visible slides based on the current index
  const visibleSlides = [
    clients[(currentIndex - 1 + clients.length) % clients.length], // Left slide
    clients[currentIndex],                                         // Center slide
    clients[(currentIndex + 1) % clients.length]                   // Right slide
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600">
            Partnering with companies to create lasting success stories
          </p>
        </motion.div>

        <div className="flex justify-center items-center gap-12">
          {visibleSlides.map((client, index) => (
            <motion.div
              key={client.name}
              animate={{
                scale: index === 1 ? 1.2 : 0.9, // Center slide is larger
                opacity: index === 1 ? 1 : 0.6  // Side slides are dimmed
              }}
              transition={{ duration: 0.8 }}
              className="md:w-[250px] md:h-[250px] w-full h-[110px] bg-white rounded-zxz shadow-md p-5 flex flex-col items-center justify-center transition-all duration-700 hover:shadow-lg"
            >
             <a href={client.link} target="_blank" rel="noopener noreferrer"><img src={client.logo} alt={client.name}  /></a> 
              <span className="text-md font-semibold text-gray-700 text-center">
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <p className="text-gray-600 mt-2">
            Join our growing list of satisfied clients
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ClientSlider;
