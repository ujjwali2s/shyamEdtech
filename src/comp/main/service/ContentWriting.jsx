import { motion } from 'framer-motion';
import { FiFeather, FiBook, FiGlobe, FiMail, FiFileText, FiEdit } from 'react-icons/fi';

const services = [
  {
    icon: FiFeather,
    title: 'Blog Writing',
    description: 'Engaging blog posts that establish thought leadership.',
    features: ['SEO Optimized', 'Research-Backed', 'Engaging Style']
  },
  {
    icon: FiGlobe,
    title: 'Website Content',
    description: 'Compelling copy that converts visitors into customers.',
    features: ['UX Writing', 'Call-to-Actions', 'Brand Voice']
  },
  {
    icon: FiMail,
    title: 'Email Marketing',
    description: 'Persuasive email campaigns that drive action.',
    features: ['A/B Testing', 'Personalization', 'Automation']
  }
];

const ContentWritingAlt = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center relative mb-20"
        >
          {/* Decorative elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-20 -right-20 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 270, 180, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          />

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <span className="text-emerald-600 font-semibold tracking-wider uppercase">Content that Converts</span>
            <h2 className="mt-4 text-5xl font-bold text-gray-900">Craft Your Story</h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your ideas into compelling narratives that resonate with your audience.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="relative bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
                
                <div className="relative">
                  <div className="w-16 h-16 bg-emerald-100 rounded-xl p-3 mb-6">
                    <service.icon className="w-full h-full text-emerald-600" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-8">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl font-semibold shadow-lg group"
          >
            <span><a href="/contact" className="href"> Start Writing</a></span>
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentWritingAlt;