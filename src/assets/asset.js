// Navigation function returning an array of navigation items
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
      href:"https//www.facebook.com",
      src: "/src/resource/fb.png"
    },
    {
      id: 2,
      name: "Instagram",
      href:"https//www.instagram.com",
      src: "/src/resource/ig.png"
    },
  
  {
    id: 3,
    name: "telegram",
    href:"https//www.telegram.com",
    src: "/src/resource/tg.png"
  },
  {
    id: 4,
    name: "github",
    href:"https//www.github.com",
    src: "/src/resource/git.png"
  },
];
//contact details
const Contact =()=>[
{
  id:1,
  name:"phone",
  details:"=91 7488746122",
  url:"tel:+917488746122",
  src:"/src/resource/telephone.png"
},
{
  id:2,
  name:"Email",
  details:"admin@Shyamedtech.com",
  url:"mailto:admin@Shyamedtech.com",
  src:"/src/resource/email.png"
},
{
  id:3,
  name:"whatsapp",
  details:"WhatsApp Us",
  url:"https://wa.me/917488746122",
  src:"/src/resource/wa.png"
},
]
  export { Navigation, Social , Contact };
  