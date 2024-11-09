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
import { FiCode, FiPenTool, FiTrendingUp, FiShare2 } from 'react-icons/fi';

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
    title: "Projects",
    url: "/projects" 
  },
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
    url: "https://www.facebook.com",
    src: fbIcon
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://www.instagram.com",
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
    url: "https://www.github.com",
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
    details: "admin@Shyamedtech.com",
    url: "mailto:admin@Shyamedtech.com",
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
  { img: Car1, title: "Website & Application Development", short: "short" },
  { img: Car2, title: "Social Media Marketing", short: "short" },
  { img:Car3, title: "Graphic Designing", short: "short" },
  { img: Car4, title: "Advertisement & Promotion", short: "short" },
  { img: Car5, title: "SEO - Search Engine Optimization", short: "short" }
];

const Testimonials =()=> [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "The web development team delivered beyond our expectations. Our new site has increased conversions by 150%!",
    image: "https://i.pravatar.cc/150?img=1",
    company: "TechStart Solutions"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    content: "Their SEO expertise helped us reach page one of Google. Our organic traffic has doubled in just 3 months.",
    image: "https://i.pravatar.cc/150?img=2",
    company: "Digital Growth Inc"
  },
  {
    name: "Emma Davis",
    role: "Creative Director",
    content: "The design work was exceptional. They truly understood our brand and brought it to life beautifully.",
    image: "https://i.pravatar.cc/150?img=3",
    company: "Creative Studios"
  },
  {
    name: "James Wilson",
    role: "E-commerce Manager",
    content: "Their social media strategy transformed our online presence. We've seen a 200% increase in engagement!",
    image: "https://i.pravatar.cc/150?img=4",
    company: "Shop Direct"
  },
  {
    name: "Lisa Thompson",
    role: "Startup Founder",
    content: "From concept to launch, they guided us through every step. Our app has gained 50k users in just two months!",
    image: "https://i.pravatar.cc/150?img=5",
    company: "InnovateTech"
  },
  {
    name: "David Kim",
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
export { Navigation, Social, Contact, cardContent ,CarouselData,Testimonials,Services};
