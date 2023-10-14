import React from 'react';
import '../src/css/projects.css'
import PropTypes from 'prop-types';

function ProjectItem(props) {


    return (
        
        <div className='project'>
            <a href={props.projectLink}>
                <div className='project-image' style={{background:'url('+props.projectImage+')'}}></div>
                <div className='project-body'>
                    <h2 className='project-title'>{props.projectTitle}</h2>
                    <p className='project-description'>{props.projectDescription}</p>
                </div>
            </a>
        </div>
        
    );
}


export default ProjectItem;
