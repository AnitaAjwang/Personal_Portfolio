import '../../css/main.css';
import {CodeUrl} from '../../Data/data';
const NotFound = () => {
    const {gitUrl} = CodeUrl;
    return(
      <section id="notfound">
          <div className="notfound">
              <div className="notfound-404">
                  <h1>404</h1>
              </div>
              <h2>Oops! Nothing was found</h2>
			<p>The page you are looking for might have been removed or is still on local host<a href="#">Return to homepage</a> or <a href={gitUrl}>view the project on github</a></p>
          </div>
      </section>
    )
}
export default NotFound;