import React from 'react';
import './src/css/publications.css'
import ProjectItem from '../projects/components/projectItem';
import projects from './projects.json'


class Publications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='publications-container'>
                <h1 className='section-title'>Publications</h1>
                <div className='projects-container'>
                    {projects.projectData.map((project) => (
                        <ProjectItem projectTitle={project.name} projectDescription={project.description} projectImage={project.image} projectLink={project.link}></ProjectItem>  
                    )
                    )}
                </div>
            </div>
        );
    }
}

Publications.propTypes = {};

export default Publications;
