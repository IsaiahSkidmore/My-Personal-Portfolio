import AboutMe from './AboutMe';
import Banner from './Banner';
import Projects from './Projects';

export const HomePage = () => {
    return (
        <div>
            <Banner />
            <div className='homePageAboutMe'>
            <AboutMe />
            </div>
            <Projects />
        </div>
    );
}

export default HomePage;