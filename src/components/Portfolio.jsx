import React from 'react';
import { Link } from 'react-router-dom';
import newEra1 from '../assets/mmelodiesdemopic.png';
import newEra2 from '../assets/TeamWeaveDemoScreenshot.png';


const projects = [
  {
    title: '',
    image: newEra1, 
    deployedLink: 'link-to-deployed-app1', 
    githubLink: 'link-to-github-repo1', 
  },
  {
    title: '',
    image: newEra2, 
    deployedLink: 'link-to-deployed-app1', 
    githubLink: 'link-to-github-repo1', 
  },
  {
    title: '',
    image: newEra2, 
    deployedLink: 'link-to-deployed-app1',
    githubLink: 'link-to-github-repo1', 
  },
  {
    title: '',
    image: newEra1, 
    deployedLink: 'link-to-deployed-app1', 
    githubLink: 'link-to-github-repo1', 
  }
];

const Portfolio = () => {
  return (
    <div className='mainBody'>
      <div className="portfolioPage">
        <div className='OOOO'>
          <h2>My Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.title} className="project"> {/* Use project title as key for uniqueness */}
                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                  <img src={project.image} alt={project.title} className='portfolioProjectImg'/>
                  <h3>{project.title}</h3>
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;