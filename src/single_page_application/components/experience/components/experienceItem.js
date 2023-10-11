import React from 'react';
import PropTypes from 'prop-types';

function ExperienceItem(props){
    return (
        <li className='timeline-item'>
            <div className='timeline-info'>
                {props.dates}
            </div>
            <div className='timeline-box'>
                <h3>{props.role}</h3>
                <h4>{props.jobCompany}</h4>
                <p dangerouslySetInnerHTML={{__html:props.description}}></p>
            </div>                    
        </li>
    );
}


export default ExperienceItem;




