import { motion } from 'framer-motion';
import { FiMonitor, FiSmartphone, FiDatabase, FiLayers, FiCode, FiGlobe, FiServer, FiShoppingCart } from 'react-icons/fi';
import { SiAndroid, SiApple, SiWindows } from 'react-icons/si';


const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ServicesPage() {
  return (
    <div>
      
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Web Development Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Web Development Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple static websites to complex web applications, we deliver cutting-edge solutions
              that drive business growth.
            </p>
          </motion.div>

          {/* Static Websites */}
          <motion.div 
            className="mb-20"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp} className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl  transform rotate-3 scale-105 opacity-20 blur-xl" />
                  <img
                    src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3"
                    alt="Static Websites"
                    className="rounded-2xl shadow-2xl relative z-10 h-[500px] w-full"
                  />
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6">Static Websites</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <FiGlobe className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Landing Pages</h3>
                      <p className="text-gray-600">High-converting landing pages optimized for performance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FiLayers className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Portfolio Sites</h3>
                      <p className="text-gray-600">Showcase your work with beautiful, responsive designs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FiCode className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Technologies</h3>
                      <p className="text-gray-600">HTML5, CSS3, JavaScript, React, Next.js, Tailwind CSS</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Dynamic Websites */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-bold mb-6">Dynamic Web Applications</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <FiDatabase className="w-6 h-6 text-indigo-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Full-Stack Solutions</h3>
                      <p className="text-gray-600">Robust backend systems with scalable databases</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FiServer className="w-6 h-6 text-indigo-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Custom CMS</h3>
                      <p className="text-gray-600">Tailored content management systems for your needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FiShoppingCart className="w-6 h-6 text-indigo-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-xl mb-2">E-commerce Solutions</h3>
                      <p className="text-gray-600">Feature-rich online stores with secure payment gateways</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl transform -rotate-3 scale-105 opacity-20 blur-xl" />
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3"
                    alt="Dynamic Web Applications"
                    className="rounded-2xl shadow-2xl relative z-10"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Development Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Application Development
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Cross-platform solutions that deliver exceptional user experiences across all devices.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {/* Android Development */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48 bg-gradient-to-br from-green-400 to-green-600">
                <SiAndroid className="absolute bottom-4 right-4 w-20 h-20 text-white/20" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 p-6">
                  <h3 className="text-2xl font-bold text-white">Android Apps</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    Native Android Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    Kotlin & Java Expertise
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    Material Design Implementation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    Google Play Store Deployment
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* iOS Development */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900">
                <SiApple className="absolute bottom-4 right-4 w-20 h-20 text-white/20" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 p-6">
                  <h3 className="text-2xl font-bold text-white">iOS Apps</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-900 rounded-full" />
                    Swift Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-900 rounded-full" />
                    UIKit & SwiftUI
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-900 rounded-full" />
                    Apple Design Guidelines
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-900 rounded-full" />
                    App Store Optimization
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Windows Development */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-700">
                <SiWindows className="absolute bottom-4 right-4 w-20 h-20 text-white/20" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 p-6">
                  <h3 className="text-2xl font-bold text-white">Windows Apps</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    .NET Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    WPF & UWP Apps
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    Windows Store Apps
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    Cross-Platform Desktop Apps
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
    </div>
  );
}