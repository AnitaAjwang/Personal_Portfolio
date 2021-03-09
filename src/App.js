import { Home, NavBar, About,Skills,Projects,Contact,Loader} from './Components';
import {useState,useEffect} from 'react';
import './css/main.css';

const App = () =>
{
    const [isDesktop,setIsDesktop] = useState(false);
    const [isMobile,setIsMobile] = useState(false);
    const [loading,setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        },2000)

    }, [])

    return(
        <div>
            {loading ? (<Loader loading={loading}/>):(
            <div>
            <NavBar isDesktop={isDesktop} setIsDesktop={setIsDesktop} isMobile={isMobile} setIsMobile={setIsMobile}/>
            <Home isDesktop={isDesktop} setIsDesktop={setIsDesktop} isMobile={isMobile} setIsMobile={setIsMobile}/>
            <About isDesktop={isDesktop} setIsDesktop={setIsDesktop} isMobile={isMobile} setIsMobile={setIsMobile}/>
            <Skills isDesktop={isDesktop} setIsDesktop={setIsDesktop} isMobile={isMobile} setIsMobile={setIsMobile}/>
            <Projects isDesktop={isDesktop} setIsDesktop={setIsDesktop} isMobile={isMobile} setIsMobile={setIsMobile}/>
            <Contact isDesktop={isDesktop} setIsDesktop={setIsDesktop} isMobile={isMobile} setIsMobile={setIsMobile}/>
            </div>
    )}
         </div>   
           
)  

}

export default App;