import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  portfour,
  portnine,
  portsix,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Expreience",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  }, 
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  { 
    title: "PHP Developer",
    icon: backend,
  },
  {
    title: "Laravel Developer",
    icon: creator,
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "TBI Mohali",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2017 - April 2019",
    points: [
      "Developed interactive and user-friendly UI using HTML5, CSS3, JavaScript, Bootstrap4",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Worked in point-based game for Injoy Global and also gained experience in google service API like Analytics, Maps Location,  Oauth etc",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Used back-end techs like PHP, MySQL to develop server-side apps with Agile and Scrum methodology",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Invito Software Solutions,",
    icon: shopify,
    iconBg: "#383E56",
    date: "April 2019 - Jan 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Integrate and deploy PHP code, including source code on AWS Platform using EC2, VPC & S3 services",
      "Interacted with clients to identify requirements, performing user research, and presenting deliverable plans",
      "Developed admin panel in yii2 for the ‘Personal Trainer Finder’ application in which admin can analyse application activities for the application support", 
      "Completed two small backend admin-based projects for mobile applications in Laravel 8 PHP framework with the implemented socket.io feature with node.js for chat between team",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "RapidSofts",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Dec 2022",
    points: [
      "Worked in MERN technologies for various projects and deployed them on EC2 instance of aws with ubuntu and apache server",
      "Completed one POS project with the team which have integration of Clover api, Datatrax api for travel bookings",
      "Completed charity fundraising project in Laravel with ‘Join as Volunteer’ feature and integrated stripe payment gateway",
      "Collaborate with Mobile team and completed CRUD based Api for various applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Jaswinder made good contribution as a software developer at Invito Software Solutions LLP. He was someone who was innovative in problem solving and was keen to learn and willing to undertake difficult challenges.",
    name: "Vipul Bansal",
    designation: "CTO",
    company: "Invito Soft Solutions",
    image: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png",
  },
  {
    testimonial:
      "Jaswinder is a good developer and was able to complete the work on time. We were fully satisfied with his performance while he worked with us. He is surely recommended ! ",
    name: "Kunal Khular",
    designation: "CEO",
    company: "TBI",
    image: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png",
  },
  {
    testimonial:
      "Jaswinder is self motivated, forward thinking and knowledgeable web developer. We both have worked in various projects based on different technologies. He is very calm and good listener. It was fantastic to work with him.",
    name: "Jatin Behl",
    designation: "CTO",
    company: "RapidSoft",
    image: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png",
  },
];

const projects = [
  {
    name: "Infinity collection",
    description:
      "Web-based platform that allows users to design Tshirts as per their requirements. User can add logo and symbols plus texts to their tshirts and order on site.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: portsix,
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nosql",
        color: "green-text-gradient",
      },
      {
        name: "firestore",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Get Go Home Loans",
    description:
      "GetGo Home Loans is one of South Africa's largest bond originators. The provide home loans and helped thousands of happy customers find and secure their new homes.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: portfour,
    source_code_link: "https://www.getgohomeloans.com/",
  },
  {
    name: "Vacation Rental",
    description:
      "Web-based platform that allows users to search, book, and manage lodges from various providers, providing a convenient and efficient solution for accomodation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portnine,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
