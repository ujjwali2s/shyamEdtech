import { Social, Contact } from '../assets/asset';
import { FiFacebook, FiInstagram, FiGithub, FiPhone, FiMail } from 'react-icons/fi';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import Logo from "../assets/resource/logo.png"

export default function Footer() {
  const socialLinks = Social();
  const contactInfo = Contact();

  const getSocialIcon = (name) => {
    switch (name) {
      case 'Facebook':
        return <FiFacebook className="w-6 h-6" />;
      case 'Instagram':
        return <FiInstagram className="w-6 h-6" />;
      case 'Telegram':
        return <FaTelegram className="w-6 h-6" />;
      case 'GitHub':
        return <FiGithub className="w-6 h-6" />;
      default:
        return null;
    }
  };

  const getContactIcon = (name) => {
    switch (name) {
      case 'Phone':
        return <FiPhone className="w-5 h-5" />;
      case 'Email':
        return <FiMail className="w-5 h-5" />;
      case 'WhatsApp':
        return <FaWhatsapp className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4"><img src={Logo} alt="logo" className='md:h-[100px] md:w-[100px] h-[50px] w-[50px]' /></h3>
            <p className="text-gray-400">
              Creating innovative solutions for a digital world.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              {contactInfo.map((contact) => (
                <a
                  key={contact.id}
                  href={contact.url}
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {getContactIcon(contact.name)}
                  <span>{contact.details}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ShyamEdTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}