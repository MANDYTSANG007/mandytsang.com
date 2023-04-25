import imgCMS from "../assets/project-images/cms-overview.png";
import imgOnionMan from "../assets/project-images/onion-man.png";
import imgMegame from "../assets/project-images/megame.png";
import imgTechTalk from "../assets/project-images/techTalk.png";
import imgPerfectCup from "../assets/project-images/perfect-cup.png";
import imgWorkDayScheduler from "../assets/project-images/work-day-scheduler.png";
import imgCyclisticCaseStudy from "../assets/project-images/popular-bike-station-chicago.png";
import imgWeatherDashboard from "../assets/project-images/weather-dashboard.png";
import imgSeaTurtle from "../assets/project-images/sea-turtle.png";
import imgTurtleSightingApp from "../assets/project-images/report-turtle-sighting-app.png";
import imgDroneDeliveryApp from "../assets/project-images/drone-delivery-app1.png";
import imgSalesManagementApp from "../assets/project-images/sales-management-app.png";

export const projectData = [
    {
        id: 1,
        title: "Report Turtle Sighting App",
        description: "This UX project aims to make it easier for the public to report turtle sightings, ultimately promoting turtle conservation efforts.",
        caseStudyURL: "/turtle-sighting-app",
        imagePath: imgTurtleSightingApp,
        myRoles: ["User research", "User personas", "IA", "Wireframing", "Prototyping", "Visual Design", "Usability testing"], 
        featured: true,
        hidden: false,
        tool: ["Adobe XD"],
    },
    {
        id: 2,
        title: "Drone Delivery App",
        description: "This app streamlines the drone delivery process by empowering customers to easily reschedule their deliveries, ensuring customers have full control over their deliveries.",
        caseStudyURL: "/drone-delivery-app",
        imagePath: imgDroneDeliveryApp,
        myRoles: ["User research", "User personas", "IA", "Wireframing", "Prototyping", "Visual Design", "Usability testing"], 
        featured: true,
        hidden: false,
        tool: ["Adobe XD"],
    },
    {
        id: 3,
        title: "Sales Management App",
        description: "This sales management app will replace manual systems and incorporate inventory management, sales data analysis and providing a comprehensive view of both online and retail store data.",
        caseStudyURL: "/sales-management-app",
        imagePath: imgSalesManagementApp,
        myRoles: ["User research", "User personas", "IA", "Wireframing", "Prototyping", "Visual Design", "Usability testing"], 
        featured: true,
        hidden: false,
        tool: ["Figma"],
    },
    {
        id: 4,
        title: "Content-Management-System(CMS)",
        description: "CMS is a command-line application that allows the user to add, delete, and update employee records.",
        repoURL: "https://github.com/MANDYTSANG007/content-management-system",
        imagePath: imgCMS,
        myRoles: ["Back-end development", "Database" ],
        featured: true,
        hidden: false,
        techStack: ["Node.js", "MySQL", "MySQLWorkbench", "Inquirer", "Concole-Table", "DotEnv"],
    },
    {
        id: 5,
        title: "Onion Man",
        description: "A MERN stack app where users share their simple onion recipes. It is connected to the MongoDB Atlas cloud database and is equipped with Google Identity Services for user's authentication.",
        repoURL: "https://github.com/MANDYTSANG007/onion-man",
        imagePath: imgOnionMan,
        myRoles: ["Back-end development", "Front-end development", "Database", "Deployment"],
        featured: false,
        hidden: true,
        techStack: ["MongoDB Atlas", "Node.js", "React", "Mui", "Netlify", "Google Identity Service" ],
    },
    {
        id: 6,
        title: "MeGame",
        description: "An interactive memory game in React. A fun and engaging way to test and improve your memory skills. This game involves a series of visual cues that you need to remember in order to gain points.",
        repoURL: "https://github.com/MANDYTSANG007/megame",
        demoURL: "https://mandytsang007.github.io/megame/",
        imagePath: imgMegame,
        myRoles: ["Back-end development", "Front-end development", "UX/UI", "Debugging", "Deployment"],
        featured: false,
        hidden: true,
        techStack: ["React", "Node.js", "Bootstrap"],
    },
    {
        id: 7,
        title: "Perfect Cup - A Coffee App.",
        description: "A full-stack, SQL-backed coffee shop application gives users a comprehensive view of our commitment to ingredient transparency.",
        repoURL: "https://github.com/MChambersIV/Perfect-Cup",
        imagePath: imgPerfectCup,
        myRoles: ["Project management", "UX/UI", "Model creation", "Back-end development"],
        featured: true,
        hidden: false,
        techStack: ["Express", "MySQL", "Sequelize"],
    },
    {
        id: 8,
        title: "TechTalk - A Developer Tech Blog",
        description: "TechTalk is built using Model-View-Controller(MVC), a software architectual framework, and an Object-relational mapping(ORM) programming technique. Developers can publish their blog posts in this platform.",
        repoURL: "https://github.com/MANDYTSANG007/Developers-Tech-Blog",
        imagePath: imgTechTalk,
        myRoles: ["Back-end development", "Debugging", "Deployment"],
        featured: false,
        hidden: true,
        techStack: ["Express", "Handlebars", "Heroku", "Sequelize"],
    },
    {
        id: 9,
        title: "Work-Day-Scheduler",
        description: "A single-day scheduling application that helps users organize their busy schedules better.",
        repoURL: "https://github.com/MANDYTSANG007/Work-Day-Scheduler",
        demoURL: "https://mandytsang007.github.io/Work-Day-Scheduler/",
        imagePath: imgWorkDayScheduler,
        myRoles: ["APIs", "UX/UI", "Back-end development", "Debugging", "Updates", "Deployment"],
        featured: false,
        hidden: false,
        techStack: ["Bootstrap", "jQuery", "Moment.js"],
    },
    {
        id: 10,
        title: "Cyclistic Case Study",
        description: "A big data analytics case study for Cyclistic, a bike share company in Chicago. By analyzing vast amounts of data generated by their bike sharing program, it helps gain valuable insights into user behavior and usage patterns.",
        repoURL: "https://github.com/MANDYTSANG007/cyclistic_case_study",
        imagePath: imgCyclisticCaseStudy,
        myRoles: ["Define business problem", "Clean data", "Analyze data", "Communicate result", "Provide recommendations" ],
        featured: false,
        hidden: false,
        techStack: ["SQL", "R", "RStudio"],
    },
    {
        id: 11,
        title: "Weather Dashboard",
        description: "A weather dashboard application that is designed to provide you with up-to-date weather information in a visually appealing and user-friendly format. The dashboard provides real-time updates on temperature, humidity, wind speed, and precipitation, along with detailed hourly and daily forecasts from the OpenWeatherMap API.",
        repoURL: "https://github.com/MANDYTSANG007/Weather-Dashboard",
        demoURL: "https://mandytsang007.github.io/Weather-Dashboard/",
        imagePath: imgWeatherDashboard,
        myRoles: ["APIs", "Back-end development", "UX/UI", "Debugging"],
        featured: true,
        hidden: false,
        techStack: ["JavaScript", "Moment.js", "Bootstrap", "jQuery"],
    },
    {
        id: 12,
        title: "Sea Turtle",
        description: "Sea Turtle is a React app that features a modern and responsive user interface, with a clean and intuitive design that is easy to navigate. The app utilizes user input validation, error handling, and real-time updates based on user actions.",
        repoURL: "https://github.com/MANDYTSANG007/react-sea-turtle",
        demoURL: "https://mandytsang007.github.io/react-sea-turtle/",
        imagePath: imgSeaTurtle,
        myRoles: ["Front-end development", "Deployment", "UX Design", "Form validation"],
        featured: false,
        hidden: false,
        techStack: ["JavaScript", "React", "Google Maps Embed API"],
    },
]

