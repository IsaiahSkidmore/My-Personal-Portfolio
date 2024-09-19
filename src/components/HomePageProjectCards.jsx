import { Container, Row, Col } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
            image: 'https://via.placeholder.com/150',
            link: 'https://github.com'
        },
        {
            title: 'Project 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
            image: 'https://via.placeholder.com/150',
            link: 'https://github.com'
        },
        {
            title: 'Project 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
            image: 'https://via.placeholder.com/150',
            link: 'https://github.com'
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sed consectetur aliquam officiis iste molestias reprehenderit error architecto culpa, in distinctio praesentium velit illum dolorem hic! Provident iusto sequi laboriosam!</p>
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