import { Col } from 'react-bootstrap';
import SolidDollop from "../assets/Screenshot 2024-09-16 at 11.53.38 AM.png"

export const ProjectCard = ({title, description}) => {
    return (
        <Col sm={6} md={4} >
            <div className="proj-imgbx">
                <img src={SolidDollop} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}
export default ProjectCard; 