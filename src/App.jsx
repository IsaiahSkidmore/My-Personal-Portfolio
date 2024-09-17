import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/Nav';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import Projects from './components/Projects';
import ProjectCard from './components/ProjectCard';

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
    <div>
      <NavBar />
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Banner />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <div>
    <Router>
      <Main />
    </Router>
    </div>
    
  );
}

export default App;

