import {SkillsData,SkillsImages} from '../../Data/data';
import {useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import '../../css/main.css';


const Skills = ({isDesktop,setIsDesktop,isMobile,setIsMobile}) => {
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
        <section id="skills">
             <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px" >
             <div className="skills-heading">
                <h1 className="heading-lg">
                My
                    <span className="text-secondary"> Skills</span>
                </h1>
                </div>
            <div className="skills-grid">
                {SkillsData.map(({id, skillsImg, skillsTitle, skillsDescription, cName})=>
                    <div key={id} className={`skill ${cName}`}>
                        
                            <img src={skillsImg} alt="" className="skills-img"/>
                        
                        <h2 className="skills-title">{skillsTitle}</h2>
                        <p className="skills-description">{skillsDescription}</p>
                    </div>
                )}
            </div>
            <div className="skills-technologies"><h2>Some Technologies I Have Worked With...</h2>
                <div className="skills-row">
                    {SkillsImages.map(({id,Tech,TechImg})=>
                        <div key={id} className="skills-tech-container">
                            <img className="skills-tech-img" src={TechImg} alt={Tech}/>
                            <p className="skills-tech">{Tech}</p>
                        </div>
                    )}
                </div>
            </div>
            </Fade>
        </section>
    )
}
export default Skills;