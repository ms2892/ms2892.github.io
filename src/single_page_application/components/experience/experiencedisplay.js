import React from 'react';
import { useLocation } from 'react-router-dom';
import './src/css/experiencedisplay.css'

function ExperienceDisplay(){
    const location = useLocation();
    console.log(location.state)
    return(
        <div className="experience-display-box">
            <h1 className="experience-display-company">{location.state.company}</h1>
            <p className="experience-display-company-desc">{location.state.companyDesc}</p>
            <h1 className="experience-display-role">As a {location.state.role}</h1>
            <p className="experience-display-role-desc">{location.state.roleDesc}</p>
            <h1 className="experience-display-achievements">Impact</h1>
            <ul className='experience-display-achievements-list-group'>
                {
                    location.state.impact.map(item=>(
                        <li className="experience-display-achievements-list" dangerouslySetInnerHTML={{__html:item}}></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ExperienceDisplay;
