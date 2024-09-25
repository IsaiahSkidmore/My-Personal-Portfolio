import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/Nav';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Resume from './components/Resume';
import Footer from './components/Footer';


function Main() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/projects':
        document.title = 'Projects';
        break;
      case '/about':
        document.title = 'About Me';
        break;
      case '/resume':
        document.title = 'Resume';
        break;
      case '/contact':
        document.title = 'Contact';
        break;
      default:
        document.title = 'Home';
    }
  }, [location]);

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/contact" element={<ContactMe />} />
      <Route path='/resume' element={<Resume />} />
    </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <NavBar />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;