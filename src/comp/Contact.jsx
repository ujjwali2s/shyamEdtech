import { motion } from 'framer-motion';
import ContactForm from './main/ContactForm.jsx';
import ContactInfo from './main/ContactInfo.jsx';
import MapSection from './main/MapSection.jsx';
import Hero from './main/Hero.jsx';
import { Toaster } from 'react-hot-toast';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">]
    <Hero/>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help bring your vision to life. Reach out and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>

        <MapSection />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <img
            src="/contact-illustration.svg"
            alt="Contact illustration"
            className="max-w-md mx-auto"
          />
        </motion.div>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Contact;