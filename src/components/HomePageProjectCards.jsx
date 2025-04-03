import { Container, Row, Col } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";
import SolidDollop from "../assets/Screenshot 2024-09-16 at 11.53.38 AM.png"
import { Github } from "react-bootstrap-icons";
import Weather from "../assets/weather.jpg"
import MovieSearch from "../assets/MovieSearch.jpeg"
import MistLogo from "../assets/Mist-Logo.jpeg"


export const Projects = () => {
    const projects = [
        {
            title: <Github size={50} />,
            description: 'Mist: Game Search',
            image: MistLogo,
            link: 'https://mist-game.onrender.com/',
            repo: 'https://github.com/haydencfb/mist-game',
        },
        {
            title: <Github size={50} />,
            description: 'Do Not Call Bot',
            image: Weather,
            link: 'https://dncbot.onrender.com/',
            repo: 'https://github.com/IsaiahSkidmore/DncBot',
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
