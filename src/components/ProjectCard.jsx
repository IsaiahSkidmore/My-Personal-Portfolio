import { Col } from 'react-bootstrap';
import SolidDollop from "../assets/Screenshot 2024-09-16 at 11.53.38 AM.png"
import { Github } from "react-bootstrap-icons";

export const ProjectCard = ({title, description, link, image}) => {
    return (
        <Col sm={6} md={4} >
            <a href={link} target='_blank'>
            <div className="proj-imgbx">
                <img src={image} />
                <div className="proj-txtx">
                    <h4>
                        <a href='https://github.com/haydencfb/solid-dollop-memory-card-game' target='_blank'>
                        {title}
                        </a>
                    </h4>
                     <h5>{description}</h5>
                   
                </div>
            </div>
            </a>
        </Col>
    )
}
export default ProjectCard; 