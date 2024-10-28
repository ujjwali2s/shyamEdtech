
import igIcon from '../resource/ig.png';
import tgIcon from '../resource/tg.png';
import gitIcon from '../resource/git.png';
import telephoneIcon from '../resource/telephone.png';
import emailIcon from '../resource/email.png';
import waIcon from '../resource/wa.png';
import fbIcon from '../resource/fb.png';
import Car1 from "../resource/web1.jpg"
import Car2 from "../resource/social.avif"
import Car3 from "../resource/graphic.jpg"
import Car4 from "../resource/adver.jpg"
import Car5 from "../resource/seo.jpg"

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
      name: "facebook",
      url:"https//www.facebook.com",
      src: fbIcon
    },
    {
      id: 2,
      name: "Instagram",
      url:"https//www.instagram.com",
      src:igIcon
    },
  
  {
    id: 3,
    name: "telegram",
    url:"https//www.telegram.com",
    src: tgIcon
  },
  {
    id: 4,
    name: "github",
    url:"https//www.github.com",
    src:gitIcon
  },
];

const Contact =()=>[
{
  id:1,
  name:"phone",
  details:"=91 7488746122",
  url:"tel:+917488746122",
  src:telephoneIcon
},
{
  id:2,
  name:"Email",
  details:"admin@Shyamedtech.com",
  url:"mailto:admin@Shyamedtech.com",
  src:emailIcon
},
{
  id:3,
  name:"whatsapp",
  details:"WhatsApp Us",
  url:"https://wa.me/917488746122",
  src:waIcon
},
]

const cardContent =()=>[
  {
    id:1,
    classN:"text-white  border-t-green-500 border-b-green-500 border-l-red-500 border-r-red-500 shadow-inner bg-n-5",
    title:"this is card title",
    url:igIcon,
    first:"this is website visible content this is as it is",
    second:`this is the main content which is hidden because it's two long to readt that's why i hide that content i hope
    you don't have any issue with that because it's is good to read`
  },
  {
    id:2,
    classN:"text-white  bg-n-8 shadow-lg shadow-white-500/50 border-t-cyan-500 border-b-cyan-500 border-l-gray-500 border-r-gray-500 ",
    title:"this is  seond card title",
    url:tgIcon,
    first:"this is website visible content this is as it is",
    second:`this is the main content which is hidden because it's two long to readt that's why i hide that content i hope
    you don't have any issue with that because it's is good to read`
  },
  {
    id:3,
    classN:"text-white bg-n-7 border-t-cyan-500 border-b-cyan-500 border-l-gray-500 border-r-gray-500",
    title:"this is third card title",
    url:fbIcon,
    first:"this is website visible content this is as it is",
    second:`this is the main content which is hidden because it's two long to readt that's why i hide that content i hope
    you don't have any issue with that because it's is good to read`
  },
  {
    id:4,
    classN:"text-white bg-n-9 border-b-green-500 border-l-red-500 border-r-red-500 shadow-inner bg-cyan-500",
    title:"this is card title",
    url:igIcon,
    first:"this is website visible content this is as it is",
    second:`this is the main content which is hidden because it's two long to readt that's why i hide that content i hope
    you don't have any issue with that because it's is good to read`
  },
]
const CarouselData=()=>[
  {
    id:1,
    img:Car1,
    title:"Webisite & Application Devlopment",
    short:"shoert "
  },
  {
    id:2,
    img:Car2,
    title:"Social Media Marketing",
    short:"short"
  },
  {
    id:3,
    img:Car3,
    title:"Graphic Designing",
    short:"short"
  },
  {
    id:4,
    img:Car4,
    title:"Adverstisment & Promotion",
    short:"short"
  },
  {
    id:5,
    img:Car5,
    title:"SEO-Search Engine Optimizaton",
    short:"short"
  },
]
  export { Navigation, Social , Contact ,cardContent, CarouselData};
  