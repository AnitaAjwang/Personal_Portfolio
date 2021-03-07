import {IntroData} from '../../Data/data';
import '../../css/main.css';

const Home = () => {
    const {firstName, secondName, description} = IntroData;

    return (
        <section id="home">
            <div className="home-div">
                <h1 className="lg-heading">{firstName}
                    <span className="text-secondary">{secondName}</span>
                </h1>
                <h2 className="heading-sm">
                    {description}
                </h2>
            </div>
        </section>
    )
}
export default Home;