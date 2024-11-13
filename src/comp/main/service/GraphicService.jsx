import { motion } from 'framer-motion';
import { FiPenTool, FiLayout, FiPackage, FiMonitor, FiPrinter, FiGrid } from 'react-icons/fi';

const services = [
  {
    icon: FiPenTool,
    title: 'Logo Design',
    description: 'Create a unique brand identity that leaves a lasting impression.',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: FiLayout,
    title: 'UI/UX Design',
    description: 'Intuitive interfaces that enhance user experience.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: FiPackage,
    title: 'Packaging Design',
    description: 'Stand out on shelves with eye-catching packaging.',
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: FiMonitor,
    title: 'Web Design',
    description: 'Responsive websites that look great on all devices.',
    color: 'from-orange-500 to-pink-500'
  },
  {
    icon: FiPrinter,
    title: 'Print Design',
    description: 'Professional marketing materials that get results.',
    color: 'from-red-500 to-rose-500'
  },
  {
    icon: FiGrid,
    title: 'Social Media',
    description: 'Engaging content that builds your online presence.',
    color: 'from-violet-500 to-purple-500'
  }
];

const GraphicDesignServices = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 to-purple-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
         
          <h2 className="text-4xl md:text-5xl font-bold text-white-900 mb-6">
            Graphic Designing
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Transform your ideas into stunning visuals that captivate and convert.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
          ><a href="/contact" className="href">Start Your Project</a>
            
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default GraphicDesignServices;