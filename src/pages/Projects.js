import React from "react";
import ProjectItem from "../components/ProjectItem";
import portfolio from '../assets/portfolio.png';
import menu from '../assets/menu.png';
import "../components/styles/Projects.css";
import aditya from '../assets/aditya.png';

function Projects() {
  return (
    <div className="projects">
      <h1> My Projects</h1>
      <div className="projectList">
        <ProjectItem name="Menu Card Website using JS" image={menu} />
        <ProjectItem name="Personal Portfolio Using ReactJS" image={portfolio}/>
        <ProjectItem name="Aditya Birla Pratibha Scholar" image={aditya} />
      </div>
    </div>
  );
}

export default Projects;