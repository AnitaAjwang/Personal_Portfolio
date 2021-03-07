import {AboutData} from '../../Data/data';
import '../../css/main.css';
import about from '../../images/about.jpg';

const About = () => {
    const {paragraphOne,paragraphTwo,paragraphThree,paragraphFour,languages,partThree} = AboutData;
    return (
        <section id="about">
            <div className="about-heading">
                <h1 class="heading-lg">
                About
                    <span class="text-secondary"> Me</span>
                </h1>
                <h2>Get To Know Me...</h2>
            </div>

            <div className="about-grid">
                    <img className="about-image" src={about} alt=""/>
                <div className="about-bio">
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}
                        <span className="text-secondary">{languages}</span>
                        <span>{partThree}</span></p>
                    <p>{paragraphThree}</p>
                    <p>{paragraphFour}</p>
                </div>
            </div>
            
        </section>
    )
}
export default About;