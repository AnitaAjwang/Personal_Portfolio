import {NavData} from '../../Data/data';
import { useState,useEffect } from 'react';
import { Link } from 'react-scroll';
import '../../css/main.css';

const NavBar = () => {
    //const [click,setClick] = useState();
    const [show, handleShow] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
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
                <h1 className="logo">Anita Ajwang</h1>
                    <ul className={`nav-list ${showMenu && "nav-show"}`}>
                        {NavData.map(({id,title,cName}) => 
                        <li key={id} className="nav-item">
                            <Link className={cName} to ={title.toLowerCase()} smooth duration={1000}>{title.toUpperCase()}</Link>   
                        </li>
                        )}
                    </ul>
                    <div className={` hamburger ${showMenu && "nav-close" } `} onClick={handleShowMenu}>
                        <div class="btn-line"></div>
                        <div class="btn-line"></div>
                        <div class="btn-line"></div>
                    </div>
                </div>
            </nav>

        
    )
}
export default NavBar;