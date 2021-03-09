import '../../css/main.css';
import {ProjectsData} from '../../Data/data';
import {useEffect } from 'react';
import {NotFound} from '../index';
import Fade from 'react-reveal/Fade';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


const Projects = ({isDesktop,setIsDesktop,isMobile,setIsMobile}) => {
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        loop:true,
        dots: false,
        autoplay: false,
        navText: ["Prev", "Next"],
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 3,
    
            }
        },
    };
    useEffect(() => {
        if(window.innerWidth > 769){
            setIsDesktop(true);
            setIsMobile(false);
        }
        else{
            setIsDesktop(false);
            setIsMobile(true);
        }
    }, []);
    return(
        <section id="projects">
             <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px" >
             <div className="projects-heading">
            <h1 className="heading-lg">
                My
                <span className="text-secondary"> Projects</span>
            </h1>
            </div>
            <h4 className="text-secondary">
                <a href="https://github.com/AnitaAjwang/" target="_blank" rel="noopener noreferrer">View More Projects</a>
            </h4>
            <OwlCarousel className="owl-theme" {...options} >
                {ProjectsData.map(({id,img,projectName,projectDescriptionOne,projectDescriptionTwo,codeUrl,liveUrl})=>
                    <div className="projects-card" key={id}>
                        <div className="projects-card-content">
                            <img src={img} alt={projectName}/>
                            <h2 className="projects-title">{projectName}</h2>
                            <p>{projectDescriptionOne}</p>
                        </div>
                        <div className="projects-languages">
                            <p>{projectDescriptionTwo}</p>
                            </div>     
                        <div className="projects-btns">
                        <a href={codeUrl} className="btn-dark" target="_blank" rel="noopener noreferrer">
                                <p className="projects-github">Source Code</p>
                                <i className="fab fa-github url-icon"></i>
                            </a>
                           { liveUrl !== ''? (<a href={liveUrl} className="btn-light" target="_blank" rel="noopener noreferrer">
                                <p className="projects-live">See Live</p>
                                <i className="fas fa-eye url-icon"></i>    
                            </a>):null}

                        </div>
                    </div>
                )}
            </OwlCarousel>
            </Fade>
        </section>
    )
}
export default Projects;