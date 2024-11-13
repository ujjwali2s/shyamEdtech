import { motion } from 'framer-motion';
import { FiTarget, FiBarChart2, FiUsers, FiGlobe, FiMessageCircle, FiTrendingUp } from 'react-icons/fi';

const platforms = [
  {
    icon: FiTarget,
    name: 'Google Ads',
    description: 'Reach customers actively searching for your products or services.',
    features: ['Search Ads', 'Display Network', 'YouTube Ads', 'Performance Tracking'],
    color: 'from-blue-500 to-green-500'
  },
  {
    icon: FiUsers,
    name: 'Meta Ads',
    description: 'Target specific audiences across Facebook and Instagram.',
    features: ['Facebook Ads', 'Instagram Ads', 'Audience Targeting', 'Engagement Tracking'],
    color: 'from-blue-600 to-indigo-600'
  },
  {
    icon: FiBarChart2,
    name: 'LinkedIn Ads',
    description: 'Connect with professional audiences and decision-makers.',
    features: ['Sponsored Content', 'Message Ads', 'B2B Targeting', 'Lead Generation'],
    color: 'from-blue-700 to-sky-700'
  },
  {
    icon: FiMessageCircle,
    name: 'Telegram Ads',
    description: 'Reach engaged audiences through channel and group advertising.',
    features: ['Channel Ads', 'Sponsored Messages', 'Community Building', 'Direct Response'],
    color: 'from-cyan-500 to-blue-500'
  }
];

const AdvertisingServices = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.2, 0.3]
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              opacity: [0.3, 0.2, 0.3]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
          />
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
              className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm mb-4"
            >
              Digital Advertising
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 mb-6"
            >
              Maximize Your Reach
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl text-blue-200 max-w-3xl mx-auto"
            >
              Strategic advertising across major platforms to reach your target audience and drive results.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-cyan-600/50 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${platform.color} p-3 mb-6`}>
                      <platform.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{platform.name}</h3>
                    <p className="text-blue-200 mb-6">{platform.description}</p>
                    <ul className="space-y-3">
                      {platform.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-blue-200">{feature}</span>
                        </li>
                      ))}
                    </ul>
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
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold shadow-lg group"
            >
              <span className="flex items-center justify-center">
              <a href="/contact" className="href"> Start Advertising</a>
                <FiTrendingUp className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdvertisingServices;