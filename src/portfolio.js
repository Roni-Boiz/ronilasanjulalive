/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ronila Sanjula",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ronila Sanjula Portfolio",
    type: "website",
    url: "http://ronilasanjulalive.com/",
  },
};

//Home Page
const greeting = {
  title: "Ronila Sanjula",
  logo_name: "Ronila Sanjula",
  nickname: "roni_boiz",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/resume",
  portfolio_repository: "https://github.com/Roni-Boiz/ronilasanjulalive",
  githubProfile: "https://github.com/Roni-Boiz",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/Roni-Boiz",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/ronila-sanjula",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:ebdrsanjula@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/ronilasanjula",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Data Science: ML & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Working on module to give recomendation to Jobs and Courses by users profile details (CV)",
        "⚡ Beginner knowledge in computer grapics and image processing",
        "⚡ Hands on experience and knowledge on Linear Regression, Logistic Regression, Reguralization, ANN, Naive Bayes, SVM",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        // {
        //   skillName: "PyTorch",
        //   fontAwesomeClassname: "logos-pytorch",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React and NextJS",
        "⚡ Developing mobile applications using Flutter and Android Stuido using Java and Dart",
        "⚡ Creating application backend in Node, Spring and Express",
        "⚡ Experience on Mysql and MongoDB databases",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#EA585C",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#73B61E",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#73B61E",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "logos:c",
          style: {
            color: "#03599C",
          },
        },
        {
          skillName: "CPP",
          fontAwesomeClassname: "vscode-icons:file-type-cpp3",
          style: {
            color: "#03599C",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#6181B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "logos:nextjs-icon",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Ruby",
          fontAwesomeClassname: "logos:ruby",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:scala",
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#73B61E",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "logos:bash-icon",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "logos:git-icon",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#450135",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#061E26",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#AE5603",
          },
        },
        // {
        //   skillName: "Inkscape",
        //   fontAwesomeClassname: "simple-icons:inkscape",
        //   style: {
        //     color: "#000000",
        //   },
        // }
      ],
    },
    {
      title: "Interest and Hobby",
      fileName: "InterestImg",
      skills: [
        "⚡ Designing games for mobile and desktop compters",
        "⚡ Create and animate 3D computer graphics using ThreeJS",
        "⚡ Create and build virtual reality experience using A-Frame and AR.js",
        "⚡ Create and build simple arduino projects on interest",
      ],
      softwareSkills: [
        {
          skillName: "Unity",
          fontAwesomeClassname: "simple-icons:unity",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Three JS",
          fontAwesomeClassname: "logos:threejs",
        },
        {
          skillName: "AFrame",
          fontAwesomeClassname: "simple-icons:aframe",
          style: {
            color: "#E72A60",
          },
        },
        {
          skillName: "Godot",
          fontAwesomeClassname: "logos:godot-icon",
        },
        {
          skillName: "Arduino",
          fontAwesomeClassname: "logos:arduino",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/Roni_Boiz",
    },
    {
      siteName: "stackoverflow",
      iconifyClassname: "simple-icons:stackoverflow",
      style: {
        color: "#323754",
      },
      profileLink: "https://stackoverflow.com/users/17787646/roni-boiz",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Colombo School of Computing",
      subtitle: "BSc. (Hons) in Software Engineering",
      logo_path: "ucsc-logo.png",
      alt_name: "UCSC",
      duration: "2020 - Present",
      descriptions: [
        "⚡ I have studied software engineering subjects like Data Structures and Algorithms, OOP, DBMS, CS, OS, CA, CN, SPM, SQA, ML etc.",
        "⚡ Apart from this, I am following Machine Learnig, Deep Learning, Big Data, and Full Stack Development courses.",
        "⚡ Maintain overroll GPA of 3.59 from first two acadamic years (up-to-date).",
      ],
      website_link: "https://ucsc.cmb.ac.lk/",
    },
    {
      title: "IJSE | Institute of Software Engineering",
      subtitle: "CMJD | Comprehensive Master Java Developer",
      logo_path: "ijse-logo.png",
      alt_name: "IJSE",
      duration: "2018 - 2019",
      descriptions: [
        "⚡ I have studied programming fundermentals, OOP, MySQL Client, Java Swing, JavaFX, MVC and Layered architecture, Design patterns, Regular Expressions, Jasper Reports, etc.",
        "⚡ Get basic knowledge in HTML, CSS, and web hosting.",
        "⚡ Apart from this, Complete a full single user application from strach using JavaFX, MySQL database and Jasper reports.",
      ],
      website_link: "https://www.ijse.lk/",
    },
    {
      title: "Prince of Wales' College",
      subtitle: "Alma mater",
      logo_path: "pwc-logo.png",
      alt_name: "PWC",
      duration: "2005 - 2018",
      descriptions: [
        "⚡ Best acadamic performance in Physical Science stream in A/L examination 2018. (District_Rank - 364 | Island_Rank - 1336)",
        "⚡ Distiction level certificate on Sri Lankan Mathematical Olympiad 2017 by Sri Lanka Olympiad Mathematics Foundation.",
        "⚡ Distiction level certificate on All Island Senior Certificate.",
      ],
      website_link: "https://en.wikipedia.org/wiki/Prince_of_Wales%27_College,_Moratuwa",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning Specialization (Ongoing)",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning Specialization (Ongoing)",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Cryptography I",
      subtitle: "- Stanford University",
      logo_path: "stanford_logo.png",
      certificate_link:
        "",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Big Data",
      subtitle: "- Dr Wen Zheng",
      logo_path: "iioe-logo.png",
      certificate_link:
        "",
      alt_name: "iioe",
      color_code: "#135889",
    },
    {
      title: "Cybersecurity for Everyone",
      subtitle: "- University of Maryland",
      logo_path: "University_of_Maryland_logo.png",
      certificate_link:
        "",
      alt_name: "University of Maryland",
      color_code: "#E0AC0B",
    },
    {
      title: "AI",
      subtitle: "- Dr. Bin CHEN",
      logo_path: "iioe-logo.png",
      certificate_link:
        "",
      alt_name: "iioe",
      color_code: "#135889",
    },
    {
      title: "GCE Advanced Level",
      subtitle: "- Department of Examination",
      logo_path: "department-education-logo.png",
      certificate_link:
        "",
      alt_name: "AL",
      color_code: "#2A73CC",
    },
    {
      title: "Dharmacharya Certificate",
      subtitle: "- Department of Examination",
      logo_path: "department-education-logo.png",
      certificate_link:
        "",
      alt_name: "AL",
      color_code: "#2A73CC",
    },
    {
      title: "SL Mathematical Olympiad",
      subtitle: "- Olympiad Foundation",
      logo_path: "SLOMF.png",
      certificate_link:
        "",
      alt_name: "olympiad",
      color_code: "#2A73CC",
    },
    {
      title: "Senior Certificate In Theory of Music",
      subtitle: "- Institute of Western Music & Speech",
      logo_path: "iwms-logo.png",
      certificate_link:
        "",
      alt_name: "iwms",
      color_code: "#2A73CC",
    },
    {
      title: "Daham Pasal Final Certificate",
      subtitle: "- Department of Examination",
      logo_path: "department-education-logo.png",
      certificate_link:
        "",
      alt_name: "OL",
      color_code: "#2A73CC",
    },
    {
      title: "GCE Ordinary Level",
      subtitle: "- Department of Examination",
      logo_path: "department-education-logo.png",
      certificate_link:
        "",
      alt_name: "OL",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have work experience in accouting and managing people as well as handling customers. I have suppoert to deployee a POS system  and train people and document how to use the system (issue GRN, GIN, Create Invoices, and Purchase Orders). I love team work and open sourse products so, I will contribute to many opensource communities and projects.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Junior Accountant",
          company: "Agoal International (PVT) LTD",
          company_url: "https://agoalrugby.com/",
          logo_path: "agoal-international.png",
          duration: "June 2019 - December 2019",
          location: "Stamboul Pl, Colombo 3",
          description:
            "I worked as a Junior accountant under super vision of Charted Accountant. Gain knowledge on Quick book, account balancing and annual audit.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        // {
        //   title: "Data Science Research Intern",
        //   company: "Delhivery Pvt. Ltd.",
        //   company_url: "https://www.delhivery.com/",
        //   logo_path: "delhivery_logo.png",
        //   duration: "May 2019 - Sept 2019",
        //   location: "Gurgaon, Haryana",
        //   description:
        //     "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
        //   color: "#ee3c26",
        // },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        // {
        //   title: "Google Explore ML Facilitator",
        //   company: "Google",
        //   company_url: "https://about.google/",
        //   logo_path: "google_logo.png",
        //   duration: "June 2019 - April 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
        //   color: "#4285F4",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create React and Spring applications and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Project Gallery",
  description:
    "Look overview of some projects I have done so far.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profilephoto.png",
    description:
      "I am available on following social media. You can message me, I will reply within 24 hours. I can help you with code, lab, assignments and projects on C, C++, Java, Php, JS, MySQL, Python, Scala, React, NextJS, Android and Flutter.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Sudharmarama Road, Katubedda, Moratuwa.",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/dir/6.792423,79.8954461",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+94 712323019",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
