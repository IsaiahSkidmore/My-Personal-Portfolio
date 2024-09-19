import HomeAboutMe from './HomeAboutMe';
import Banner from './Banner';
import Projects from './Projects';

export const HomePage = () => {
    return (
        <div>
            <Banner />
            <div className='homePageAboutMe'>
            <HomeAboutMe />
            </div>
            <Projects />
        </div>
    );
}

export default HomePage;