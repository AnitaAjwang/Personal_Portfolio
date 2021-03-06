import {NavData} from '../../Data/data';
import { useState,useEffect } from 'react';
import { Link } from 'react-scroll';
import '../../css/main.css';

const NavBar = () => {
    //const [click,setClick] = useState();
    const [show, handleShow] = useState(false);

    //attach a scroll listener
    //When user scrolls down 100pixels down from the Y axis the Black nav bar is displayed
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll"); // remove the listeners to avoid accumulation of listeners each time the user scrolls
        };
        
    }, []);

    // const clickHandler = () => {
    //     setClick(!click);
    // }
    return (
        <section>
            <nav className={`nav ${show && "nav-black"}`}>
                <div className="nav-list-container">
                <h1 className="logo">Anita Ajwang</h1>
                    <ul className="nav-list">
                        {NavData.map(({id,title,cName}) => 
                        <li key={id} className="nav-item">
                            <Link className={cName} to ={title.toLowerCase()} smooth duration={1000}>{title.toUpperCase()}</Link>   
                        </li>
                        )}
                    </ul>
                </div>
            </nav>

        </section>
    )
}
export default NavBar;