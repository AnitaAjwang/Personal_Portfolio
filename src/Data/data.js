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
    languages:'React, Node, MongoDB, Express, Python, SQL, MySQL, PHP, HTML, CSS and SASS ',
    partThree:',but picking up a new framework or language is not a problem.',
    paragraphThree:'I am comfortable developing on the frontend or backend. I aspire toward a career that will allow me to channel my creativity through crafting beautiful software and engaging experiences.',
    paragraphFour:'I enjoy finding new and improved ways to create seamless user experiences using efficient, effective, and scalable technology.I aim to build software that is not only powerful under the hood, but also intuitive and pixel-perfect in its user interface and experience.',
};
/**--------------------------------------SKILLS DATA------------------------------------------------------------------------ */
export const SkillsData =[
    {
        id:nanoid(),
        skillsImg:'https://raw.githubusercontent.com/AnitaAjwang/Developer-Portfolio/682c8bfe2da4d5091918d6aed30787b92900bd5b/images/web-programming.svg',
        skillsTitle:'Development',
        skillsDescription:'With a strong background in computer science, I am passionate about web design and creation and interested in data science. I aim to write clean, readable code that others can use and use to build beautiful software as I advance as a developer.',
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
        Tech:'Github',
        TechImg:'images/skills/github.png',
    },
    {
        id:nanoid(),
        Tech:'Python',
        TechImg:'images/skills/python.png',
    },
    {
        id:nanoid(),
        Tech:'JQuery',
        TechImg:'images/skills/jquery.png',
    },

]
/**--------------------------------------PROJECTS DATA------------------------------------------------------------------------ */
export const ProjectsData = [

    {
        id:nanoid(),
        img:'https://raw.githubusercontent.com/AnitaAjwang/Developer-Portfolio/main/images/developer.png',
        projectName:'Personal Portfolio',
        projectDescriptionOne:'',
        projectDescriptionTwo:'',
        codeUrl:'',
        liveUrl:'',
    },
{
    id:nanoid(),
    img:'https://raw.githubusercontent.com/AnitaAjwang/COVID-19-Tracker/main/images/covid.PNG',
    projectName:'COVID-19 tracker',
    projectDescriptionOne:'A web application that tracks the number of COVID-19 cases globally and country-based and visualizes the data. The data is fetched from an API.',
    projectDescriptionTwo:'REACT  NODE  HTML  CSS  MATHDROID  API  MATERIAL UI',
    codeUrl:'https://github.com/AnitaAjwang/COVID-19-Tracker',
    liveUrl:'https://covid-tracker-5fc43.web.app/',
},
{
    id:nanoid(),
    img:'https://sproutvideo.com/blog/wp-content/uploads/2017/04/Blog_042517-1200x673.jpg',
    projectName:'Social Media App',
    projectDescriptionOne:'',
    projectDescriptionTwo:'',
    codeUrl:'',
    liveUrl:'',
},
{
    id:nanoid(),
    img:'https://raw.githubusercontent.com/AnitaAjwang/REST-API/main/images/restapi.png',
    projectName:'CRUD REST API',
    projectDescriptionOne:'This is a basic CRUD REST API that is built using Node, Express, MongoDB and Mongoose',
    projectDescriptionTwo:'',
    codeUrl:'https://github.com/AnitaAjwang/REST-API',
    liveUrl:'https://github.com/AnitaAjwang/REST-API',
},
{
    id:nanoid(),
    img: 'https://sproutvideo.com/blog/wp-content/uploads/2017/04/Blog_042517-1200x673.jpg',
    projectName:'Weather Application',
    projectDescriptionOne:'',
    projectDescriptionTwo:'',
    codeUrl:'',
    liveUrl:'',
},
{
    id:nanoid(),
    img:'https://sproutvideo.com/blog/wp-content/uploads/2017/04/Blog_042517-1200x673.jpg',
    projectName:'Expense Tracker',
    projectDescriptionOne:'',
    projectDescriptionTwo:'',
    codeUrl:'',
    liveUrl:'',
},
]
