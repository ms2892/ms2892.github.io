import React from 'react';
import PropTypes from 'prop-types';

function ProjectItem(props) {


    return (
        
        <div className='project'>
            <a href={props.projectLink}>
                <div className='project-image' style={{background:'url('+props.projectImage+')', backgroundSize:'cover',filter: 'grayscale(100%)'}}></div>
                <div className='project-body'>
                    <h2 className='project-title'>{props.projectTitle}</h2>
                    <p className='project-description'>{props.projectDescription}</p>
                </div>
            </a>
        </div>
        
    );
}


export default ProjectItem;
