import { Home, NavBar, About,Skills,Projects } from './Components';
import {BrowserRouter as Router, Route} from 'react-router-dom';
const App = () =>
{
    return(
        <div>
            <Router>
            <NavBar />
            <Home />
            <About />
            <Skills />
            <Projects />
            </Router>
        </div>
    )
}

export default App;