import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const partners = [
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/160px-Microsoft_logo.svg.png",
    tier: "Elite Partner"
  },
  {
    name: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/160px-Adobe_Corporate_Logo.png",
    tier: "Premium Partner"
  },
  {
    name: "Salesforce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/160px-Salesforce.com_logo.svg.png",
    tier: "Technology Partner"
  },
  {
    name: "AWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/150px-Amazon_Web_Services_Logo.svg.png",
    tier: "Cloud Partner"
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/160px-Google_2015_logo.svg.png",
    tier: "Strategic Partner"
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/160px-IBM_logo.svg.png",
    tier: "Innovation Partner"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Partners() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center mb-4"
          >
            <FiAward className="w-8 h-8 text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Trusted by Industry Leaders
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Our Strategic Partners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Collaborating with world-class organizations to deliver exceptional solutions
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-8 rounded-xl border border-gray-100 hover:border-blue-100 transition-colors duration-300 bg-white">
                <div className="h-20 flex items-center justify-center mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-[140px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-800">{partner.name}</h3>
                  <p className="text-sm text-blue-600 mt-1">{partner.tier}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            Become a Partner
          </a>
        </motion.div>
      </div>
    </div>
  );
}