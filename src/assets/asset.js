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
      url: "/projects" // Fixed the typo from "/Proects" to "/projects"
    },
    {
      id: 4,
      title: "Contact Us",
      url: "/contact"
    }
  ];
  
  // Profile function returning an array of profile information
  const Profile = () => [
    {
      id: 1,
      username: "Admin",
      password: "poklji",
      url: "/src/resource/fb.png"
    },
    {
      id: 1,
      username: "hun",
      password: "poklji",
      url: "/src/resource/logo.png"
    },
  ];
  
  // Export both as named exports
  export { Navigation, Profile };
  