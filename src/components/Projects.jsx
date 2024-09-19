import { Container, Row, Col } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";
import { Github } from "react-bootstrap-icons";
import SolidDollop from "../assets/Screenshot 2024-09-16 at 11.53.38 AM.png"

export const Projects = () => {
    const projects = [
        {
            title: <Github size={50} />,
            description: 'Solid Dollop Memory Card Game',
            image: SolidDollop,
            link: 'https://haydencfb.github.io/solid-dollop-memory-card-game/'
        },
        {
            title: <Github size={50} />,
            description: 'Solid Dollop Memory Card Game',
            image: SolidDollop,
            link: 'https://haydencfb.github.io/solid-dollop-memory-card-game/'
        },
        {
            title: <Github size={50} />,
            description: 'Solid Dollop Memory Card Game',
            image: SolidDollop,
            link: 'https://haydencfb.github.io/solid-dollop-memory-card-game/'
        },
        {
            title: <Github size={50} />,
            description: 'Solid Dollop Memory Card Game',
            image: SolidDollop,
            link: 'https://haydencfb.github.io/solid-dollop-memory-card-game/'
        },
        {
            title: <Github size={50} />,
            description: 'Solid Dollop Memory Card Game',
            image: SolidDollop,
            link: 'https://haydencfb.github.io/solid-dollop-memory-card-game/'
        },
        {
            title: <Github size={50} />,
            description: 'Solid Dollop Memory Card Game',
            image: SolidDollop,
            link: 'https://haydencfb.github.io/solid-dollop-memory-card-game/'
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