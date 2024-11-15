import igIcon from './resource/ig.png';
import tgIcon from './resource/tg.png';
import gitIcon from './resource/git.png';
import telephoneIcon from './resource/telephone.png';
import emailIcon from './resource/email.png';
import waIcon from './resource/wa.png';
import fbIcon from './resource/fb.png';
import Car1 from "./resource/web1.jpg";
import Car2 from "./resource/social.avif";
import Car3 from "./resource/graphic.jpg";
import Car4 from "./resource/adver.jpg";
import Car5 from "./resource/seo.jpg";
import thala from "./resource/thala.png";
import fairbet from "./resource/fairbet.png";
import indus from "./resource/indus.avif";
import shoppre from "./resource/shoppre.png";
import nurse from "./resource/nurse.png";
import nsn from "./resource/nsn.jpg";
import Valid from "./resource/valid.jpg";
import baba from "./resource/baba.jpg";
import nisan from "./resource/nisan.jpg";
import { FiCode, FiPenTool, FiTrendingUp, FiShare2 } from 'react-icons/fi';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import { FiInstagram, FiTwitter, FiFacebook, FiLinkedin, FiYoutube } from 'react-icons/fi';
import { title } from 'framer-motion/client';

const Navigation = () => [
  {
    id: 1,
    title: "Home",
    url: "/"
  },
  {
    id: 2,
    title: "About Us",
    url: "/about"
  },
  {
    id: 3,
    title: "Services",
    url: "/services" 
  },
  // {
  //   id: 5,
  //   title: "Projects",
  //   url: "/projects" 
  // },
  {
    id: 4,
    title: "Contact Us",
    url: "/contact"
  }
];

// Social Media Icons
const Social = () => [
  {
    id: 1,
    name: "Facebook",
    url: "https://www.facebook.com/shyamedtech",
    src: fbIcon
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://www.instagram.com/shyamedtech",
    src: igIcon
  },
  {
    id: 3,
    name: "Telegram",
    url: "https://www.telegram.com",
    src: tgIcon
  },
  {
    id: 4,
    name: "GitHub",
    url: "https://www.github.com/ujjwali2s",
    src: gitIcon
  },
 
];

const Contact = () => [
  {
    id: 1,
    name: "Phone",
    details: "+91 7488746122",
    url: "tel:+917488746122",
    src: telephoneIcon
  },
  {
    id: 2,
    name: "Email",
    details: "contact@Shyamedtech.com",
    url: "mailto:contact@Shyamedtech.com",
    src: emailIcon
  },
  {
    id: 3,
    name: "WhatsApp",
    details: "WhatsApp Us",
    url: "https://wa.me/917488746122",
    src: waIcon
  }
];

const cardContent = () => [
  {
    id: 1,
    classN: "text-white border-t-green-500 border-b-green-500 border-l-red-500 border-r-red-500 shadow-inner bg-n-5",
    title: "This is card title",
    url: igIcon,
    first: "This is website visible content as it is.",
    second: `This is the main content, which is hidden because it's too long to read. That's why I hid that content. I hope you don't have any issue with that, as it's good for readability.`
  },
  {
    id: 2,
    classN: "text-white bg-n-8 shadow-lg shadow-white-500/50 border-t-cyan-500 border-b-cyan-500 border-l-gray-500 border-r-gray-500",
    title: "This is second card title",
    url: tgIcon,
    first: "This is website visible content as it is.",
    second: `This is the main content, which is hidden because it's too long to read. That's why I hid that content. I hope you don't have any issue with that, as it's good for readability.`
  },
  {
    id: 3,
    classN: "text-white bg-n-7 border-t-cyan-500 border-b-cyan-500 border-l-gray-500 border-r-gray-500",
    title: "This is third card title",
    url: fbIcon,
    first: "This is website visible content as it is.",
    second: `This is the main content, which is hidden because it's too long to read. That's why I hid that content. I hope you don't have any issue with that, as it's good for readability.`
  },
  {
    id: 4,
    classN: "text-white bg-n-9 border-b-green-500 border-l-red-500 border-r-red-500 shadow-inner bg-cyan-500",
    title: "This is card title",
    url: igIcon,
    first: "This is website visible content as it is.",
    second: `This is the main content, which is hidden because it's too long to read. That's why I hid that content. I hope you don't have any issue with that, as it's good for readability.`
  }
];

const CarouselData = () => [
  { img:baba, title:"", short:""},
  
  { img: Car1, title: "Website & Application Development", short: "We specialize in creating high-quality websites and applications, combining modern design with seamless functionality to deliver user-friendly, responsive, and efficient digital solutions tailored to your business needs." },
  { img: Car2, title: "Social Media Marketing", short: "Boost your brand’s online presence with our expert social media marketing. We create engaging content and targeted campaigns to increase visibility, drive traffic, and build loyal audiences." },
  { img:Car3, title: "Graphic Designing", short: "Transform your ideas into stunning visuals with our graphic design services. From logos to branding, we craft designs that captivate, inspire, and communicate your brand's unique identity." },
  { img: Car4, title: "Advertisement & Promotion", short: "Boost your brand’s visibility and reach with targeted advertisement and promotion strategies. We create compelling campaigns that engage your audience and drive impactful results across multiple platforms." },
  { img: Car5, title: "SEO - Search Engine Optimization", short: "Enhance your online presence with SEO services designed to improve visibility and ranking on search engines. Our approach drives organic traffic, boosts credibility, and maximizes your reach." }
];

const Testimonials =()=> [
  {
    name: "Amit Sharma",
    role: "CEO, Thala7",
    content: "The web development team delivered beyond our expectations. Our new site has increased conversions by 150%!",
    image: "https://i.pravatar.cc/150?img=1",
    company: "Thala7 Solutions"
  },
  {
    name: "Sanjeet Garg",
    role: "Director",
    content: "Their SEO expertise helped us reach page one of Google. Our organic traffic has doubled in just 3 months.",
    image: "https://i.pravatar.cc/150?img=2",
    company: "Digital Growth Inc"
  },
  {
    name: "Ramesh Chandra Naiydu",
    role: "Director",
    content: "The design work was exceptional. They truly understood our brand and brought it to life beautifully.",
    image: "https://i.pravatar.cc/150?img=3",
    company: "Nurse Recruiter"
  },
  {
    name: "Nigam Patel",
    role: "E-commerce Manager",
    content: "Their social media strategy transformed our online presence. We've seen a 200% increase in engagement!",
    image: "https://i.pravatar.cc/150?img=4",
    company: "Patel Shops"
  },
  {
    name: "Aman Kumar",
    role: "Startup Founder",
    content: "From concept to launch, they guided us through every step. Our app has gained 50k users in just two months!",
    image: "https://i.pravatar.cc/150?img=5",
    company: "InnovateTech"
  },
  {
    name: "Rahul singh",
    role: "Product Manager",
    content: "The UI/UX design improved our user satisfaction scores by 45%. Couldn't be happier with the results.",
    image: "https://i.pravatar.cc/150?img=6",
    company: "Product Plus"
  }
];


const Services =()=> [
  {
    icon: FiCode,
    title: "Web Development",
    description: "Custom websites that convert visitors into customers. Built with the latest technologies.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: FiPenTool,
    title: "Graphic Design",
    description: "Eye-catching designs that tell your brand's story and capture attention.",
    color: "from-purple-500 to-pink-400"
  },
  {
    icon: FiTrendingUp,
    title: "SEO Optimization",
    description: "Boost your visibility and rank higher in search results with our SEO expertise.",
    color: "from-green-500 to-emerald-400"
  },
  {
    icon: FiShare2,
    title: "Social Media",
    description: "Strategic social media marketing to grow your audience and engagement.",
    color: "from-orange-500 to-yellow-400"
  }
];
const ContactItems =()=> [
  { icon: FiMail, title: 'Email', content: 'contact@shyamedtech.com' },
  { icon: FiPhone, title: 'Phone', content: '+91 7488746122' },
  { icon: FiMapPin, title: 'Location', content: ['Jamshedpur', 'Jharkhand, India'] },
  { icon: FiClock, title: 'Business Hours', content: ['Mon-Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM', 'Sun: Closed'] }
];
const Clients =()=> [
  { name: 'Thala7', logo: thala,link:"https://thala7.in/" },
  { name: 'NurseRecruiter', logo:nurse , link:"https://www.nurserecruiter.com/" },
  { name: 'ValidationRecruiter', logo:Valid , link:"https://validationrecruiter.com/"},
  { name: 'FairBet', logo:fairbet,link:"https://fairbet.store/" },
  { name: 'NSNBlog', logo:nsn ,link:"https://nsn-blog2.onrender.com"},
  { name: 'Indus', logo:indus , link:"https://www.inddus.com/"},
  { name: 'ShopPre', logo:shoppre , link:"https://www.shoppre.com/" },
];
const Platforms =()=> [
  {
    id:1,
    icon: FiInstagram,
    name: 'Website Devlopment',
    description: 'At ShyamedTech, we create modern, responsive websites designed to meet your unique needs. Our innovative designs and expert development turn your ideas into seamless, impactful digital experiences that drive success.',
    stats: '100+ Repeated Users',
    color: 'from-pink-500 to-purple-500'
  },
  {
    id:2,
    icon: FiTwitter,
    name: 'E-commerce',
    description: 'At ShyamedTech, we create innovative e-commerce platforms functionality. Our customized solutions deliver seamless shopping, secure payments,empowering your online business to succeed and grow effortlessly.',
    stats: '350+ Daily Products',
    color: 'from-blue-400 to-blue-500'
  },
  {
    id:3,
    icon: FiFacebook,
    name: 'Full Stack Devlopment',
    description: 'At ShyamedTech, we deliver comprehensive full-stack development services. From intuitive front-end designs to back-end solutions,we create scalable,secure applications to meet your business goals and user needs.',
    stats: '50+ Expert Devloper',
    color: 'from-pink-500 to-purple-500'
  },
  {
    id:4,
    icon: FiFacebook,
    name: 'Application Devlopment',
    description: 'we excel in application development, creating scalable, user-friendly solutions tailored to your needs. From concept to deployment, we ensure seamless performance, innovation, and reliability for your business success.',
    stats: '2.9B+ Active Users',
    color: 'from-red-600 to-green-700'
  },
  {
    id:5,
    icon: FiFacebook,
    name: 'software devlopment ',
    description: 'we provide best software development services, building scalable, and tailored solutions. Our innovative approach ensures  performance, empowering your business with cutting-edge technology for optimal growth and success.',
    stats: '2.9B+ Active Users',
    color: 'from-blue-600 to-blue-700'
  },
  {
    id:6,
    icon: FiFacebook,
    name: 'Content/Blog Writing',
    description: 'At ShyamedTech, we offer professional content and blog writing services that engage, inform, and inspire. Our creative team crafts compelling, SEO-optimized content tailored to amplify your brand’s voice and reach.',
    stats: '2.9B+ Active Users',
    color: 'from-pink-500 to-purple-500'
  }
  

];
export { Navigation, Social, Contact, cardContent ,CarouselData,Testimonials,Services,ContactItems,Clients,Platforms};
