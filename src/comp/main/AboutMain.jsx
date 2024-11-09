import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { label: 'Happy Clients', value: 500, suffix: '+' },
  { label: 'Projects Completed', value: 1200, suffix: '+' },
  { label: 'Active Clients', value: 150, suffix: '' },
  { label: 'Team Members', value: 45, suffix: '+' }
];

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const step = Math.ceil(value / 50);
      const timer = setInterval(() => {
        start += step;
        if (start > value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl font-bold text-blue-600">
      {count}{suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <div className="relative bg-white">
      {/* Top Curve */}
      <div className="absolute top-0 left-0 right-0 h-16">
        <svg className="absolute bottom-0 w-full h-16" preserveAspectRatio="none" viewBox="0 0 1440 54">
          <path
            fill="#f3f4f6"
            fillOpacity="1"
            d="M0,32L48,26.7C96,21,192,11,288,16C384,21,480,43,576,48C672,53,768,43,864,37.3C960,32,1056,32,1152,32C1248,32,1344,32,1392,32L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Our Company</span>
            <h2 className="text-4xl font-bold text-gray-900">Transforming Businesses Through Digital Innovation</h2>
            <p className="text-gray-600 leading-relaxed">
              With over a decade of experience, we've been at the forefront of digital transformation, helping businesses 
              adapt and thrive in the digital age. Our team of experts combines creativity with technical excellence to 
              deliver solutions that drive real business growth.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in building long-term partnerships with our clients, understanding their unique challenges, and 
              delivering tailored solutions that exceed expectations. Our commitment to innovation and excellence has made 
              us a trusted partner for businesses worldwide.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-6"></div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team collaboration"
              className="relative z-10 rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <svg className="absolute bottom-0 w-full h-16" preserveAspectRatio="none" viewBox="0 0 1440 54">
          <path
            fill="#f9fafb"
            fillOpacity="1"
            d="M0,32L48,37.3C96,43,192,53,288,48C384,43,480,21,576,16C672,11,768,21,864,26.7C960,32,1056,32,1152,32C1248,32,1344,32,1392,32L1440,32L1440,54L1392,54C1344,54,1248,54,1152,54C1056,54,960,54,864,54C768,54,672,54,576,54C480,54,384,54,288,54C192,54,96,54,48,54L0,54Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}