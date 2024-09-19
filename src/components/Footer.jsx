import { Github } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";

export const Footer = () => {
    return (
        <div className="footer">
            
            <a href="https://github.com/IsaiahSkidmore" target="_blank" rel="noopener noreferrer">
            <button className="socials"><Github size={60} /></button>
            </a>

            <a href="https://www.linkedin.com/in/isaiah-skidmore-7b52331a0/" target="_blank" rel="noopener noreferrer">

            <button className="socials"> <Linkedin size={60} /></button>
            </a>

            <a href="https://www.instagram.com/iskidmorephotos/?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <button className="socials"> <Instagram size={60} /></button>
            </a>

        </div>
    );
}

export default Footer;