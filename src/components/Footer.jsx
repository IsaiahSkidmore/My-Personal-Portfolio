import { Github } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";

export const Footer = () => {
    return (
        <div className="footer">
            <button className="socials"><Github size={60} /></button>
            <button className="socials"> <Linkedin size={60} /></button>
            <button className="socials"> <Instagram size={60} /></button>
        </div>
    );
}

export default Footer;