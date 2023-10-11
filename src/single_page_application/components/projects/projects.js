import React from 'react';
import PropTypes from 'prop-types';
import './src/css/projects.css';
import ProjectItem from './components/projectItem';
import projects from './projects.json'

class Projects extends React.Component {
    render() {
        return (
            <div>
                <h1 className='section-title'>University Projects</h1>
                <div className='projects-container'>
                    {projects.projectData.map((project) => (
                        <ProjectItem projectTitle={project.name} projectDescription={project.description} projectImage={project.image}></ProjectItem>  
                    )
                    )}
                </div>
            </div>
        );
    }
}


export default Projects;
