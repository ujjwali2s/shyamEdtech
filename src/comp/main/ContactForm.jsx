import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  // Initialize EmailJS with your public key
  emailjs.init("UyMzZSeB6vvFIpIjw"); // Replace with your actual public key

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Get form data
    const formData = new FormData(formRef.current);
    const templateParams = {
      from_name: formData.get('user_name'),
      reply_to: formData.get('user_email'),
      message: formData.get('message'),
      send_email: formData.get('user_email'), // Adding the user's email here
      send_contact: formData.get('user_contact'), // Adding the user's email here
      to_name: 'ShyamEdTEch', // Customize this if needed
    };

    emailjs.send(
      'service_p439cfc', // Replace with your EmailJS service ID
      'template_4dneeto', // Replace with your EmailJS template ID
      templateParams
    )
    .then(() => {
      toast.success('Thank you! We will get back to you soon.');
      formRef.current.reset();
    })
    .catch((error) => {
      console.error('Error:', error);
      toast.error('Something went wrong. Please try again later.');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-xl p-8 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -mr-20 -mt-20 opacity-50" />
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="relative z-10">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
              placeholder="John Doe"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
              placeholder="john@example.com"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-sm font-medium text-gray-700">Contact</label>
            <input
              type="tel"
              name="send_contact" 
              maxLength="14"
              pattern="^\+?\d{1,10}$" 
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
              placeholder="+12345678901"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
              placeholder="Your message here..."
            ></textarea>
          </motion.div>
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 font-medium"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : 'Send Message'}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
