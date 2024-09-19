import HomeAboutMe from './HomeAboutMe';
import Banner from './Banner';
import HomePageProjectCards from './HomePageProjectCards';

export const HomePage = () => {
    return (
        <div>
            <Banner />
            <HomeAboutMe />
            <HomePageProjectCards />
        </div>
    );
}

export default HomePage;