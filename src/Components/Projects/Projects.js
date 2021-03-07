import '../../css/main.css';
import {ProjectsData} from '../../Data/data';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Projects = () => {
    return(
        <section id="projects">
            <h1 class="heading-lg">
                My
                <span class="text-secondary"> Projects</span>
            </h1>
            <h4 className="text-secondary">(more coming soon)</h4>
            <OwlCarousel className="owl-theme" loop items={3} margin={30} nav >
                {ProjectsData.map(({id,img,projectName,projectDescriptionOne,projectDescriptionTwo,codeUrl,liveUrl})=>
                    <div className="projects-card" key={id}>
                        <div className="projects-card-content">
                            <img src={img} alt={projectName}/>
                            <h2 className="project-title">{projectName}</h2>
                            <p>{projectDescriptionOne}</p>
                            <p>{projectDescriptionTwo}</p>
                        </div>
                        <div className="projects-btns">
                            <a href={liveUrl} className="btn-light" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-eye url-icon"></i>
                            </a>
                            <a href={codeUrl} className="btn-dark" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github url-icon"></i>
                            </a>
                        </div>
                    </div>
                )}
            </OwlCarousel>
        </section>
    )
}
export default Projects;