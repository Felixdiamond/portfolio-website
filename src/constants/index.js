import {
    // web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    fullstack,
    terminal,
    datascience,
    machinelearning,
    alx,
    placeholderls,
    placeholderck,
    php,
    mysql,
    python,
    linux,
    pwebsite,
    contactsapi,
    asp,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full-stack Developer",
      icon: fullstack,
    },
    {
      title: "Software Engineer",
      icon: terminal,
    },
    {
      title: "Data Scientist",
      icon: datascience,
    },
    {
      title: "ML Engineer",
      icon: machinelearning,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Linux",
      icon: linux,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "php",
      icon: php,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "ALX",
      icon: alx,
      iconBg: "#FFF5E6",
      date: "August 2022 - November 2023",
      points: [
        "Built software products including programs, webpages, and databases.",
        "Defined and continuously improved software development best practices.",
        "Produced clean, error-free code to meet aggressive timelines.",
        "Maintained existing software through bug fixes and enhancements.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Lomosoft",
      icon: placeholderls,
      iconBg: "#eeeeee",
      date: "Feb 2022 - August 2023",
      points: [
        "Performed and directed website updates.",
        "Built end-to-end systems optimized for speed and scale.",
        "Created scalable web services, applications, and interfaces.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Chain Koffee",
      icon: placeholderck,
      iconBg: "#383E56",
      date: "Jun 2023 - Sep 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "He excels in crafting high-quality code that is easy to understand and maintain. He is a great team player and is always willing to help others.",
      name: "Omonike Blessing",
      designation: "CEO",
      company: "Elijah Graphics",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Felix does.",
      name: "Emmanuel Oye",
      designation: "CEO",
      company: "O.G Creations",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Felix optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Ebisintei Dennis",
      designation: "CEO",
      company: "Lomosoft",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Portfolio Website",
      description:
        "A dynamic platform that allows visitors to explore my professional background, view my past projects, and learn about my skills and expertise.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: pwebsite,
      source_code_link: "https://github.com/",
    },
    {
      name: "nineBooks",
      description:
        "An e-commerce website for selling books, videos and audiobooks. Built with NextJs, Supabase, Mongodb and AWS S3 storage.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: "https://ik.imagekit.io/choppa123/project-showcase_mWSuKcv2x?updatedAt=1702670639717",
      source_code_link: "https://github.com/Felixdiamond/ecommerce-website",
    },
    {
      name: "Accident Predictor",
      description:
        "This website predicts accident severity using machine learning algorithims. Users input relevant data to receive a potential severity prediction.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "scikit-learn",
          color: "green-text-gradient",
        },
        {
          name: "machine learning",
          color: "pink-text-gradient",
        },
      ],
      image: asp,
      source_code_link: "https://github.com/Felixdiamond/Cl0ud-9ine-streamlit",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };