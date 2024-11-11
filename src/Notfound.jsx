import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const NotFoundAlt = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-pink-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute -top-24 left-2/2 -translate-x-1/2"
            >
              <motion.div
                animate={{
                  rotate: [10, 0, -10, 0, 10],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <span className="block text-[80px] md:text-[100px] leading-none font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
                  404
                </span>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute -top-24 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 10, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <span className="block text-[800px] md:text-[100px] leading-none font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
                  404
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center mt-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Lost in Space?
              </h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Houston, we have a problem! The page you're looking for has floated away into the digital cosmos.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/')}
                  className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Return Home
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(-1)}
                  className="w-full sm:w-auto px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-gray-400 transition-all duration-300"
                >
                  Go Back
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex justify-center"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 5, 0],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <svg
                  className="w-32 h-32 text-indigo-600/20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21.71 20.29l-18-18A1 1 0 002.29 3.71L5 6.41V11a7 7 0 0014 0v-.93l2.71 2.71a1 1 0 001.41-1.41zM7 11V8.41l3.93 3.93A5 5 0 017 11zm10 0a5 5 0 01-9.73 1.53L17.59 8.41V11z"/>
                  <path d="M20.71 19.29l-18-18a1 1 0 00-1.42 1.42l18 18a1 1 0 001.42-1.42z"/>
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center text-gray-500 text-sm"
        >
          Lost? Don't worry, our space crew is here to help!
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundAlt;