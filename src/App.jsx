import React from 'react';
import NavBar from './components/Nav';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import Projects from './components/Projects';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <ProjectCard />
    </div>
  );
}

export default App;
