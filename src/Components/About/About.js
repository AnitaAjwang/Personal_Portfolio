import {AboutData} from '../../Data/data';
import {useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import '../../css/main.css';
import about from '../../images/about.jpg';

const About = ({isDesktop,setIsDesktop,isMobile,setIsMobile}) => {
    const {paragraphOne,paragraphTwo,paragraphThree,paragraphFour,languages,partThree} = AboutData;
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
    return (
        <section id="about">
             <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px" >
            <div className="about-heading">
                <h1 className="heading-lg">
                About
                    <span className="text-secondary"> Me</span>
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
            </Fade> 
        </section>
    )
}
export default About;