import React, { useEffect } from 'react';
import { ProjectData } from '../../data/projects';
import ProjectCard from './project-card';
import Separator from '../../common/separator';
import './projects.scss';
import Aos from "aos";
import "aos/dist/aos.css";


function Projects() {
    useEffect(() =>{
        Aos.init({duration: 2000});
      }, [])

    const data = ProjectData;

    return (
        <div data-aos="fade-up" className='projects'>
            <Separator />
            <label className='section-title'>Projetos</label>
            <div>
                {data.map((project) =>{
                    return <ProjectCard project={project} />
                })}
            </div>
        </div>
    )
}

export default Projects
