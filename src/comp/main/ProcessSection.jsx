import { motion } from 'framer-motion';
import { FiTarget, FiCode, FiCheckCircle, FiRefreshCw } from 'react-icons/fi';

const steps = [
  {
    icon: <FiTarget className="w-8 h-8" />,
    title: "Discovery & Planning",
    description: "We analyze your needs and create a comprehensive strategy.",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: <FiCode className="w-8 h-8" />,
    title: "Development",
    description: "Our experts bring your vision to life with clean, efficient code.",
    color: "from-purple-400 to-purple-600"
  },
  {
    icon: <FiCheckCircle className="w-8 h-8" />,
    title: "Testing & Launch",
    description: "Rigorous testing ensures a flawless user experience.",
    color: "from-green-400 to-green-600"
  },
  {
    icon: <FiRefreshCw className="w-8 h-8" />,
    title: "Maintenance & Support",
    description: "Ongoing support to keep your digital assets performing optimally.",
    color: "from-orange-400 to-orange-600"
  }
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A streamlined approach to delivering exceptional digital solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative bg-white p-8 rounded-xl shadow-lg group-hover:scale-[1.02] transition-transform duration-300">
                <div className="text-gray-800 mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}