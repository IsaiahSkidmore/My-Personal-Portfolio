import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className="bg-body-tertiary"  {...scrolled ? "scrolled": ""}>
      <Container className="navbar-bg" >
        <Navbar.Brand as={Link} to="/" className="name">Isaiah Skidmore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            {/* Remove the OnClick function to see if that effects the code */}
            <Nav.Link as={Link} to="/projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link as={Link} to="/about" className={activeLink === 'about' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About Me</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={activeLink === 'contact' ? 'active navbar-link': 'navbar-link'}onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/resume" className={activeLink === 'resume' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar;