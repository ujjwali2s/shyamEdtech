import { motion } from 'framer-motion';
import { Services } from '../../assets/asset';

export default function ServiceCards() {
  const services = Services();
  
  return (
    <div className="py-20 bg-gray-50">
      {/* Services Section */}
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className={`absolute inset-0 ${service.color} rounded-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300`} />
              
              <div className="relative p-8 bg-white rounded-xl z-10">
                <div className="mb-4 flex items-center justify-center h-12 w-12 mx-auto">
                  {typeof service.icon === 'function' ? (
                    <service.icon className="w-9 h-9" />
                  ) : (
                    service.icon
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
