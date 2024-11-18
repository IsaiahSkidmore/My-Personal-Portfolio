import { Container, Row, Col } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";
import { Github } from "react-bootstrap-icons";
import SolidDollop from "../assets/Screenshot 2024-09-16 at 11.53.38 AM.png"
import Weather from "../assets/weather.jpg"
import AutoShop from "../assets/auto-shop.jpeg"
import ReadMeGenerator from "../assets/Readme-Generator.jpeg"
import EmployeeManager from "../assets/Employee-Manager.jpeg"
import MovieSearch from "../assets/MovieSearch.jpeg"

export const Projects = () => {
    const projects = [
        {
            title: <Github size={50} />,
            description: 'Solid Dollop Memory Card Game',
            image: SolidDollop,
            link: 'https://haydencfb.github.io/solid-dollop-memory-card-game/',
            repo: 'https://github.com/haydencfb/solid-dollop-memory-card-game',

        },
        {
            title: <Github size={50} />,
            description: '5 Day Weather Forecast',
            image: Weather,
            link: 'https://five-day-weather-forecast.onrender.com/',
            repo: 'https://github.com/IsaiahSkidmore/5-Day-Weather-Forecast-Application',            
        },
        {
            title: <Github size={50} />,
            description: 'Auto Shop',
            image: AutoShop,
            link: 'https://github.com/IsaiahSkidmore/Isaiahs-Auto-Shop',
            repo: 'https://github.com/IsaiahSkidmore/Isaiahs-Auto-Shop',

        },
        {
            title: <Github size={50} />,
            description: 'Readme Generator',
            image: ReadMeGenerator,
            link: 'https://github.com/IsaiahSkidmore/Isaiahs-Quick-Print-README-Generator',
            repo: 'https://github.com/IsaiahSkidmore/Isaiahs-Quick-Print-README-Generator',

        },
        {
            title: <Github size={50} />,
            description: 'Employee Manager',
            image: EmployeeManager,
            link: 'https://github.com/IsaiahSkidmore/My-Employee-Manager',
            repo: 'https://github.com/IsaiahSkidmore/My-Employee-Manager',

        },
        {
            title: <Github size={50} />,
            description: 'Film Tracker',
            image: MovieSearch,
            link: 'https://filmtacker.netlify.app/',
            repo: 'https://github.com/IsaiahSkidmore/Film-Tracker',

        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    </Col>
                </Row>

                <Row>
                    {
                        projects.map((project, index) => {
                            return(
                                <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
};
export default Projects;
