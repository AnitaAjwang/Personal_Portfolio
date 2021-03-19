import {nanoid} from 'nanoid';

/**--------------------------------------INTRO DATA------------------------------------------------------------------------ */
export const IntroData = {
    firstName:'Anita ' ,
    secondName:'Ajwang',
    description: 'Web Developer'
};
/**--------------------------------------NAVBAR DATA------------------------------------------------------------------------ */
export const NavData = [
    {
        id:'1',
        title:'Home',
        cName:"nav-link",
    },
    {
        id:'2',
        title:'About',
        cName:"nav-link",
    },
    {
        id:'3',
        title:'Skills',
        cName:"nav-link",
    },
    {
        id:'4',
        title:'Projects',
        cName:"nav-link",
    },
    {
        id:'5',
        title:'Contact',
        cName:"nav-link",
    }
]
/**-----------------------------------------ABOUT DATA-------------------------------------------------- */
export const AboutData = {
    paragraphOne:'I am a software developer with hands-on experience designing and developing applications using a range of technologies and programming languages.',
    paragraphTwo:'I primarily use ',
    languages:'React, Node, MongoDB, Express, SQL, MySQL, PHP, HTML, CSS, SASS, AJAX,JavaScript',
    partThree:', but picking up a new framework or language is not a problem.',
    paragraphThree:'I am comfortable developing on the frontend or backend. I aspire toward a career that will allow me to channel my creativity through crafting beautiful software and partcipating in engaging experiences.',
    paragraphFour:'I enjoy finding new and improved ways to create seamless user experiences using efficient, effective, and scalable technology.I aim to build software that is not only powerful under the hood, but also intuitive and pixel-perfect in its user interface and experience.',
};
/**--------------------------------------SKILLS DATA------------------------------------------------------------------------ */
export const SkillsData =[
    {
        id:nanoid(),
        skillsImg:'https://raw.githubusercontent.com/AnitaAjwang/Developer-Portfolio/682c8bfe2da4d5091918d6aed30787b92900bd5b/images/web-programming.svg',
        skillsTitle:'Development',
        skillsDescription:'With a strong background in computer science, I am passionate about web dvelopment and design and interested in data science. I aim to write clean, readable code that others can use to build beautiful software as I advance as a developer.',
        cName:'skills-1',
    },
    {
        id:nanoid(),
        skillsImg:'https://raw.githubusercontent.com/AnitaAjwang/Developer-Portfolio/682c8bfe2da4d5091918d6aed30787b92900bd5b/images/uxdesign.svg',
        skillsTitle:'Experience Design',
        skillsDescription:"A product's nature is more than just how it looks on the outside. The internal functionality of a product, as well as the overall user experience, are also determined by design. I aim to create interfaces and experiences that can be enjoyed on all digital mediums.",
        cName:'skills-2',
    },
    {
        id:nanoid(),
        skillsImg:'https://raw.githubusercontent.com/AnitaAjwang/Developer-Portfolio/682c8bfe2da4d5091918d6aed30787b92900bd5b/images/responsive-design.svg',
        skillsTitle:'Responsive Design',
        skillsDescription:'I aim to build and incorporate responsive and aesthetically pleasing websites and application interfaces that adapt to any device, platform, or browser.Needless to say, responsiveness is an aspect of software I believe is vital to a successful product.',
        cName:'skills-3',
    },
    ]
export const SkillsImages = [{
        id:nanoid(),
        Tech:'REACT',
        TechImg:'images/skills/react.png',
    },
    {
        id:nanoid(),
        Tech:'HTML',
        TechImg:'images/skills/html.png',
    },
    {
        id:nanoid(),
        Tech:'CSS',
        TechImg:'images/skills/css.png',
    },
    {
        id:nanoid(),
        Tech:'SASS',
        TechImg:'images/skills/sass.png',
    },
    {
        id:nanoid(),
        Tech:'BOOTSTRAP',
        TechImg:'images/skills/bootstrap.png',
    },
    {
        id:nanoid(),
        Tech:'NODE',
        TechImg:'images/skills/node.png',
    },
    {
        id:nanoid(),
        Tech:'MongoDB',
        TechImg:'images/skills/mongodb.png',
    },
    {
        id:nanoid(),
        Tech:'Express',
        TechImg:'images/skills/express.png',
    },

    {
        id:nanoid(),
        Tech:'git',
        TechImg:'images/skills/git.png',
    },
    {
        id:nanoid(),
        Tech:'JavaScript',
        TechImg:'images/skills/js.png',
    },
    {
        id:nanoid(),
        Tech:'PHP',
        TechImg:'images/skills/php.png',
    },
    {
        id:nanoid(),
        Tech:'AJAX',
        TechImg:'images/skills/ajax.png',
    },
    {
        id:nanoid(),
        Tech:'JQUERY',
        TechImg:'images/skills/jquery.png',
    },
    {
        id:nanoid(),
        Tech:'Figma',
        TechImg:'images/skills/figma.jpg',
    },

]
/**--------------------------------------PROJECTS DATA------------------------------------------------------------------------ */
export const ProjectsData = [

    {
        id:nanoid(),
        img:'images/projects/portfolio.PNG',
        projectName:'Personal Portfolio',
        projectDescriptionOne:'This is my personal portfolio. That I built using various technologies and learnt quite a lot while doing it',
        projectDescriptionTwo:'React html css sass node',
        codeUrl:'https://github.com/AnitaAjwang/Personal_Portfolio',
        liveUrl:'https://anita-ajwang.web.app/',
    },
{
    id:nanoid(),
    img:'images/projects/covidtracker.PNG',
    projectName:'COVID-19 tracker',
    projectDescriptionOne:'This tracks COVID-19 cases globally and country-based and visualizes the data. Live data is fetched using Async/Await syntax.',
    projectDescriptionTwo:'REACT  NODE  HTML  CSS  MATHDROIDAPI  MATERIAL UI',
    codeUrl:'https://github.com/AnitaAjwang/COVID-19-Tracker',
    liveUrl:'https://covid-tracker-5fc43.web.app/',
},
{
    id:nanoid(),
    img:'images/projects/moments.PNG',
    projectName:'Social Media App',
    projectDescriptionOne:'This is a full-stack application allows users to share events that happened in their lives. Async/Await syntax is used to perform CRUD functions',
    projectDescriptionTwo:'mongodb redux react node google-oauth axios',
    codeUrl:'https://github.com/AnitaAjwang/Moments',
    liveUrl:'',
},
{
    id:nanoid(),
    img: 'images/projects/devportfolio.PNG',
    projectName:'Portfolio Template',
    projectDescriptionOne:'This is a responsive website portfolio template',
    projectDescriptionTwo:'html css sass',
    codeUrl:'https://github.com/AnitaAjwang/DevPortfolio',
    liveUrl:'https://anitaajwang.github.io/DevPortfolio/',
},
{
    id:nanoid(),
    img:'https://raw.githubusercontent.com/AnitaAjwang/REST-API/main/images/restapi.png',
    projectName:'CRUD REST API',
    projectDescriptionOne:'This is a basic CRUD REST API that is built using Node, Express, MongoDB and Mongoose',
    projectDescriptionTwo:'Node Express MongoDB Mongoose',
    codeUrl:'https://github.com/AnitaAjwang/REST-API',
    liveUrl:'https://github.com/AnitaAjwang/REST-API',
},
{
    id:nanoid(),
    img: 'images/projects/numbersmain.PNG',
    projectName:'Numbers Facts',
    projectDescriptionOne:'Application that fethches interesting facts from an API about numbers that a user enters',
    projectDescriptionTwo:'html bootstrap ajax',
    codeUrl:'https://github.com/AnitaAjwang/NumbersFacts',
    liveUrl:'',
},
{
    id:nanoid(),
    img:'images/projects/netflixlanding.PNG',
    projectName:'Netflix Landing Page Clone',
    projectDescriptionOne:'This a single page netflix clone that was created using reactjs and hosted using firebase. Live data is fetched using Async/Await syntax.',
    projectDescriptionTwo:'react html css node tmdb-api firebase',
    codeUrl:'https://github.com/AnitaAjwang/Netflix-clone',
    liveUrl:'https://netflix-clone-63565.web.app/',
},
{
    id:nanoid(),
    img:'images/projects/restaurant1.PNG',
    projectName:'Restaurant Template',
    projectDescriptionOne:'A responsive restaurant template',
    projectDescriptionTwo:'html css sass js',
    codeUrl:'https://github.com/AnitaAjwang/Restaurant-Template',
    liveUrl:'https://anitaajwang.github.io/Restaurant-Template/',
},
];

export const CodeUrl = {
    gitUrl: 'https://github.com/AnitaAjwang',
};