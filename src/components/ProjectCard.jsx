import { Col } from 'react-bootstrap';



export const ProjectCard = ({title, description, link, image, repo}) => {
    return (
        <Col sm={6} md={4} >
            <a href={link} target='_blank'>
            <div className="proj-imgbx">
                <img src={image} />
                <div className="proj-txtx">
                    <h4>
                        <a href={repo} target='_blank'>
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