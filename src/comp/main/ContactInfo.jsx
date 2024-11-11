import { motion } from 'framer-motion';

import {ContactItems} from "../../assets/asset"
const ContactInfo = () => {
  const contactItems = ContactItems();

  return (
    <div className="space-y-6">
      {contactItems.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.5 }}
          className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex items-start space-x-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <item.icon className="text-blue-600 text-xl" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              {Array.isArray(item.content) ? (
                item.content.map((line, i) => (
                  <p key={i} className="text-gray-600">{line}</p>
                ))
              ) : (
                <p className="text-gray-600 md:text-xl text-xs">{item.content}</p>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactInfo;