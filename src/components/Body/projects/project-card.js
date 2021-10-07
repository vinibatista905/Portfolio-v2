import React, { useEffect } from "react";
import "./project-card.scss";
import Aos from "aos";
import "aos/dist/aos.css";

import { FiGlobe } from "react-icons/fi";
import { GrGithub } from "react-icons/gr";

function ProjectCard({ project }) {
  useEffect(() =>{
    Aos.init({duration: 2000});
  }, [])

  return (
    <div data-aos="fade-right" className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo} target="_blank">
              <div className="link-button">
                <FiGlobe className='icon' />
                Demo
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.github} target="_blank">
              <div className="link-button">
                <GrGithub className='icon' />
                Github
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <img src={project.image} className="project-photo" />
    </div>
  );
}

export default ProjectCard;
