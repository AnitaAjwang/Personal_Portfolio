import {SkillsData,SkillsImages} from '../../Data/data';
import '../../css/main.css';
const Skills = () => {
    return(
        <section id="skills">
                <h1 class="heading-lg">
                My
                    <span class="text-secondary"> Skills</span>
                </h1>
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
                        <div key={id}>
                            <img className="skills-tech-img" src={TechImg} alt={Tech}/>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
export default Skills;