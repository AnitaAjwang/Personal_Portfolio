import {NavData} from '../../Data/data';
import { useState,useEffect } from 'react';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import '../../css/main.css';

const NavBar = ({isDesktop,setIsDesktop,isMobile,setIsMobile}) => {
    //const [click,setClick] = useState();
    const [show, handleShow] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
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

    useEffect(() => {
        
        function handleScroll(){
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        };

        window.addEventListener("scroll",handleScroll)

    return () => {
        window.removeEventListener("scroll",handleScroll); // remove the listeners to avoid accumulation of listeners each time the user scrolls
    };
    
}, []); 

    const handleShowMenu = () =>
    {
        setShowMenu(!showMenu);//toggle
    }

    return (
       
            <nav className={`nav ${show && "nav-black"}`}>
                <div className="nav-list-container">
                <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px" >
                <h1 className="logo">
                <Link to ="home" smooth duration={1000}>Anita Ajwang</Link>   
                </h1>
                

                    <ul className={`nav-list ${showMenu && "nav-show"}`}>
                        {NavData.map(({id,title,cName}) => 
                        <li key={id} className="nav-item">
                            <Link className={cName} to ={title.toLowerCase()} smooth duration={1000}>{title.toUpperCase()}</Link>   
                        </li>
                        
                        )}
                        
                    </ul>
                    </Fade>
                    <div className={` hamburger ${showMenu && "nav-close" } `} onClick={handleShowMenu}>
                        <div className="btn-line"></div>
                        <div className="btn-line"></div>
                        <div className="btn-line"></div>
                    </div>
                </div>
            </nav>

        
    )
}
export default NavBar;