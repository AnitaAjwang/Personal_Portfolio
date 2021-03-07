import useForm from '../../useForm';
import '../../css/main.css';
const Contact = () => {
    const {handleChange, values,handleSubmit} = useForm();
    return (
        <section id="contact">
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
            <form className="contact-contactForm" onSubmit="handleSubmit">                 

                <div className="contact-wrapInput">
                    <input className="contact-formInput" 
                    id="name"
                    type="text" 
                    name="name" 
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                    />

                </div>

                <div className="contact-wrapInput">
                    <input className="contact-formInput" 
                    id="email"
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    value={values.email}
                    onChange={handleChange}
                    />
                
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
   
</section>
    )
}
export default Contact;