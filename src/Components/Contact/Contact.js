import '../../css/main.css';
import {useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import emailjs from 'emailjs-com';


const Contact = ({isDesktop,setIsDesktop,isMobile,setIsMobile}) => {
    
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

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_0pe87o5', 'template_psrl92s', e.target, 'user_3KYfIri5HQufVN1caJL8a')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

    return (
        <section id="contact">
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px" >
        <div className="contact-wrapper">
        <div className="contact-background">
        <div className="contact-container">
       
        <h1 className="contact-header">Would You Like To Work With Me? Awesome!</h1>
       
        
        <div className="contact-screen">
            <div className="contact-screenHeader">
                <div className="contact-screenHeaderLeft" >
                    <div className="contact-close"></div>
                    <div className="contact-maximize"></div>
                    <div className="contact-minimize"></div>
                </div>
                
                <div className="contact-screenHeaderRight">
                    <div className="contact-screenHeaderEllipsis"></div>
                    <div className="contact-screenHeaderEllipsis"></div>                    
                    <div className="contact-screenHeaderEllipsis"></div>
                </div>
            </div>
        <div className="contact-screenBody">
            <div className="contact-screenBodyItemLeft">
                <div className="contact-appTitle">
                <span>CONTACT</span>
                <span>ME</span>
                </div>
            </div>
            <div className="contact-screenBodyItemRight">
                <div className="contact-formGroup">
            <form className="contact-contactForm" onSubmit={sendEmail}>                 

                <div className="contact-wrapInput">
                    <input className="contact-formInput" type="text" name="name" placeholder="Name"/>

                </div>

                <div className="contact-wrapInput">
                    <input className="contact-formInput" type="email" name="email" placeholder="Email"/>
                
                </div>
                <div className="contact-wrapInput">
                    <input className="contact-formInput" name="subject" placeholder="Subject" />
                </div>
                <div className="contact-wrapInput">
                    <textarea className="contact-formInput" name="message" placeholder="Message" />
                </div>
                
                <div className="contact-containerFormButton">  
                    <button className="contact-contactFormButton" type="submit">SEND ME AN EMAIL</button>
                </div>
            
            </form>
            </div>
            </div>

        </div>
        </div>
        </div>
        </div>
    </div>
    </Fade>
</section>
    )
}
export default Contact;