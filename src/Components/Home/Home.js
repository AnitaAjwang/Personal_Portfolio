import {IntroData} from '../../Data/data';
import {useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import '../../css/main.css';


const Home = ({isDesktop,setIsDesktop,isMobile,setIsMobile}) => {
    const {firstName, secondName, description} = IntroData;
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
        <section id="home">
            <div className="home-div">
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px" >
                <h1 className="lg-heading">{firstName}
                    <span className="text-secondary">{secondName}</span>
                </h1>
                <h2 className="heading-sm">
                    {description}
                </h2>
               </Fade> 
            </div>
        </section>
    )
}
export default Home;