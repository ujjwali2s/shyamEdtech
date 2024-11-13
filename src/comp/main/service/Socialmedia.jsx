import { motion } from 'framer-motion';
import { FiInstagram, FiTwitter, FiFacebook, FiLinkedin, FiYoutube, FiTrendingUp } from 'react-icons/fi';

const platforms = [
  {
    icon: FiInstagram,
    name: 'Instagram Marketing',
    description: 'Engage your audience with visual storytelling and authentic content.',
    stats: '1B+ Monthly Users',
    color: 'from-pink-500 to-purple-500'
  },
  {
    icon: FiTwitter,
    name: 'Twitter Marketing',
    description: 'Real-time engagement and trending conversations for your brand.',
    stats: '350M+ Daily Posts',
    color: 'from-blue-400 to-blue-500'
  },
  {
    icon: FiFacebook,
    name: 'Facebook Marketing',
    description: 'Build and nurture communities around your brand values.',
    stats: '2.9B+ Active Users',
    color: 'from-blue-600 to-blue-700'
  }
];

const SocialMediaMarketingAlt = () => {
  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-blue-400 font-semibold tracking-wider uppercase"
            >
              Social Media Excellence
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
            >
              Dominate Social Media
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-gray-800 rounded-2xl p-8 hover:bg-gray-800/80 transition-colors">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${platform.color} p-3 mb-6`}>
                      <platform.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{platform.name}</h3>
                    <p className="text-gray-400 mb-6">{platform.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-400">{platform.stats}</span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-sm font-medium"
                      >
                        Learn More
                      </motion.button>
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
            <div className="inline-flex items-center space-x-2 bg-gray-800 rounded-full p-1 pr-4">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-blue-500 rounded-full text-sm font-medium"
              >
                Get Started
              </motion.span>
              <span className="text-gray-400">or</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-blue-400 text-sm font-medium"
              ><a href="/contact" className="href"> View Pricing</a>
               
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaMarketingAlt;